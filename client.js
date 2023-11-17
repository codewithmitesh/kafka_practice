const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-app",
    // brokers: ["192.168.16.14:9092"],
    brokers: ["localhost:9092"],

});
