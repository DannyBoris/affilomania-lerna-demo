const { v4 } = require("uuid");
module.exports = {
  createSample: (message) => ({
    eventId: v4(),
    reqId: v4(),
    leadId: v4(),
    type: "InputValidation",
    version: 1,
    data: {
      lead: {
        affId: Math.floor(Math.random() * 1000 + 1),
        firstName: "fdsa",
        lastName: "test",
        email: `random${Math.floor(Math.random() * 100 + 1)}@example.com`,
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
        msg: message || "AffId not exist",
        data: null,
      },
    },
    createdAt: Date.now(),
  }),
};
