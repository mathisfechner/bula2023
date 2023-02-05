var express = require("express");
var router = express.Router();
var crypto = require("crypto");

router.post("/meal", function (req, res, next) {
  console.log(req.body);
  const hash = crypto.createHash("sha256", "secret");
  id = hash.update(req.body["input-title"] + Date.now()).digest("hex");
  newMeal = {
    id: id,
    title: req.body["input-title"],
    description: req.body["input-description"],
    contact: req.body["input-mail"].toLowerCase(),
    plus: [],
    minus: [],
  };
  req.kitchenDB.put(id, JSON.stringify(newMeal));
  return res.json(newMeal);
});

router.get("/meals", async function (req, res, next) {
  return res.json(await getMeals(req));
});

router.get("/meals/:mail", async function (req, res, next) {
  return res.json(await getMeals(req, req.params.mail));
});

async function getMeals(req, mail) {
  var values = await req.kitchenDB.values().all();
  values = values
    .map((element) => {
      var meal = JSON.parse(element);
      return {
        ...meal,
        vote: !!mail
          ? meal.plus.includes(mail.toLowerCase())
            ? true
            : meal.minus.includes(mail.toLowerCase())
            ? false
            : null
          : null,
        plus: null,
        minus: null,
        count: meal.plus.length - meal.minus.length,
      };
    })
    .sort((a, b) => (a.count > b.count ? -1 : 0));
  return values;
}

router.post("/likemeal/:id/:mail", async function (req, res, next) {
  var meal = JSON.parse(await req.kitchenDB.get(req.params.id));
  await req.kitchenDB.put(
    meal.id,
    JSON.stringify({
      ...meal,
      plus: meal.plus
        .filter((mail) => mail != req.params.mail.toLowerCase())
        .concat([req.params.mail.toLowerCase()]),
      minus: meal.minus.filter((mail) => mail != req.params.mail.toLowerCase()),
    })
  );
  return res.json(await getMeals(req.params.mail));
});

router.post("/dislikemeal/:id/:mail", async function (req, res, next) {
  var meal = JSON.parse(await req.kitchenDB.get(req.params.id));
  await req.kitchenDB.put(
    meal.id,
    JSON.stringify({
      ...meal,
      plus: meal.plus.filter((mail) => mail != req.params.mail.toLowerCase()),
      minus: meal.minus
        .filter((mail) => mail != req.params.mail.toLowerCase())
        .concat([req.params.mail.toLowerCase()]),
    })
  );
  return res.json(await getMeals(req.params.mail));
});

module.exports = router;
