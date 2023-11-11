const { v4 } = require("uuid");
const fs = require("fs");
// Template JSON
const templateJson = {
  eventId: v4(),
  reqId: v4(),
  leadId: v4(),
  type: "InputValidation",
  version: 1,
  data: {
    lead: {
      affId: 56,
      firstName: "test",
      lastName: "test",
      email: "test12@jjjtest.com",
      ip: "91.80.29.13",
      phone: "+493023890",
      password: "ab132546464",
      offer: {
        name: "bitcoin code",
        url: "google.com",
        key: "COIN",
        description: "this is bitcoin code funnel",
        typeId: 1,
        lang: "EN",
      },
      extraInfo: {
        clickId: "ab-123",
        subSource: 20,
        affSub_1: "demmy",
        affSub_2: "demmy",
        affSub_3: "demmy",
        affSub_4: "demmy",
        affSub_5: "demmy",
        affSub_6: "demmy",
        affSub_7: "demmy",
        affSub_8: "demmy",
        affSub_9: "demmy",
        affSub_10: "demmy",
      },
    },
    inputValidation: {
      status: false,
      msg: "AffId not exist",
      data: null,
    },
  },
  createdAt: new Date().getTime(),
};

// Generate 60 more JSON objects
const jsonObjects = [templateJson]; // Start with the template
for (let i = 0; i < 60; i++) {
  // Create a copy of the template and modify its properties
  const newJson = { ...templateJson };
  newJson.eventId = v4();
  newJson.reqId = v4();
  newJson.leadId = v4();
  newJson.data.lead.affId = Math.floor(Math.random() * 1000) + 1;
  newJson.data.lead.email = `random${i + 1}@example.com`;
  newJson.data.inputValidation.msg = `Random Message ${i + 1}`;

  jsonObjects.push(newJson);
}

// Print the generated JSON objects

function generateData() {
  fs.writeFile("data.json", JSON.stringify(jsonObjects, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
    return
  });
}

module.exports = generateData;
