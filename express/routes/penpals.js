var express = require("express");
var router = express.Router();
var crypto = require("crypto");
const { Parser } = require("json2csv");

/* GET users listing. */
router.post("/penpals", function (req, res, next) {
  const hash = crypto.createHash("sha256", "secret");
  id = hash
    .update(req.body["input-stamm"] + req.body["input-sippe"] + Date.now())
    .digest("hex");
  req.body["anmeldedatum"] = new Date()
    .toLocaleDateString("DE")
    .replace(/\./g, "-");
  req.penpalsDB.put(id, JSON.stringify(req.body));
  return res.json(req.body);
});

router.get("/penpals/dont/tell/mirko", async function (req, res, next) {
  var values = await req.penpalsDB.values().all();
  var fields = [
    { label: "Sippenname", value: "input-sippe" },
    { label: "Stamm", value: "input-stamm" },
    { label: "Verantwortliche Person", value: "input-kontakt" },
    { label: "Telefonnummer", value: "input-tel" },
    { label: "E-Mail Adresse", value: "input-mail" },
    { label: "Namen der Sipplinge", value: "input-sipplinge" },
    { label: "Straße, Hausnummer", value: "input-adresse" },
    { label: "Postleitzahl", value: "input-plz" },
    { label: "Ort", value: "input-ort" },
    { label: "Altersstufe", value: "input-alter" },
    { label: "Geschlecht", value: "input-sex" },
    { label: "Wunsch-Altersstufe", value: "input-partner-alter" },
    { label: "Wunsch-Geschlecht", value: "input-partner-sex" },
    { label: "Sonstiges", value: "input-partner-sonst" },
    { label: "Anmeldedatum", value: "anmeldedatum" },
  ];
  values = values.map((element) => {
    var anmeldung = JSON.parse(element);
    return anmeldung;
  });
  const csv = new Parser({ fields }).parse(values);
  res.header("Content-Type", "text/csv");

  res.attachment(
    "Brieffreundschaften_" +
      new Date().toLocaleDateString("DE").replace(/\./g, "-") +
      ".csv"
  );
  res.send(csv);
});

module.exports = router;
