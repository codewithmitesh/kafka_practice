#Kafka Practice :- 

## From Official Docs :- 
https://kafka.apache.org/

## Used :- 

To Run Distributed Env Locally Used `Zookeeper` :- 

`docker run -p 2181:2181 zookeeper`

Docs :- https://zookeeper.apache.org/

**Docker Env For Kafka :-**

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Running Locally

- Create Kafka Topic :- 
```bash
node admin.js 
```

- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```
- Create Producer
```bash
node producer.js
```
```bash
> Mitesh south
> Mitesh north
```
- Watch O/P in Consumers terminals