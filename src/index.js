const express = require('express');
const {Kafka} = require('kafkajs')

require('dotenv').config()
const app = express();

(async () => {
    const kafka = new Kafka({
        clientId: 'kafka-nodejs-starter',
        brokers: ['localhost:9092'],
    });

    const producer = kafka.producer()

// Connect to the producer

    await producer.connect()

// Send an event to the demoTopic topic
    await producer.send({
        topic: 'demoTopic',
        messages: [
            {value: 'Hello micro-services world!'},
        ],

    });
    // Disconnect the producer once we're done
    await producer.disconnect();
})()


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
});
