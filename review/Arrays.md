**What is an Array?**

An array is a linear data structure that stores a collection of elements(usually of the same data type) in contigous memory locations. Each element in the array can be accessed directly via index, which makes retreivals O(1) constant time.

**What is the Purpose of an array?**

Arrays are used for:

1. Storing multiple items of the same type (e.g. integers, strings) in a single structure
2. Access elements quickly by index(direct memorty addressing)
3. efficiently iterate through elements in order

🔑**Key Characteristics**🔑

| Operation | Description                   | Time Complexity |
| --------- | ----------------------------- | --------------- |
| Access    | Get element by index          | **O(1)**        |
| Search    | Find element by value         | **O(n)**        |
| Insert    | Add element (middle)          | **O(n)**        |
| Append    | Add element at end (if space) | **O(1)**        |
| Delete    | Remove element (middle)       | **O(n)**        |

Arrays are ideal for sequential data and are the basis for many higher-level operations like summing, averagin or sorting data.

**How are they used in System Design?**

Arrays form the foundation for many real-world systems. THey can often appear under the hood of data satructures and services that rely on efficient indexing, caching, or storage layouts.

**Caching Systems**

For example arrays could be used to store recently accessed data in a memory cache like redis or lRU cache

-The array would be used to store cache enties in memory for fast access.

-The index can represent priority or recent access.

-LRU cache use array internally combined with hash maps for O(1) lookup

**Simplified LRU-like Cache Structure**

```js
let cacheKeys = [];

function access(key) {
  //move accessed key to end for most recent used
  cacheKeys = cacheKeys.filter((k) => k !== key);
  cacheKeys.push(key);
  //if we are over capacity, evict the oldest at index 0
  if (cacheKeys.length > 3) cacheKeys.shift();
}
```

**Databases and Indexing**
Databases like POstgres or mysql use arrays to store rows in pages and indexes in b-trees

Arrays are key to efficient memory layout and fast sequential I/O.

Arrays make sequential scaning and range quieries efficient because of spatial locality.

When you do something like _SELECT \* FROM users WHERE id BETWEEN 100 AND 200_, the DB can quickly iterate through an array segment of records.

**Load Balancer/Round Robin Algorithms**

You can use an array to distribute requests evenly among multiple servers
Store and list of servers in an array and cycle though them.

```js
const servers = ["server1", "server2", "server3"];
let currentIndex = 0;

function getNextServer() {
  const server = servers[currentIndex];
  currentIndex = (currentIndex + 1) % servers.length;
  return server;
}
```

This uses the array for constant-time access and circular iterations taking advantage of predictiable indexing.

**Queues, Buffer, and Message Systems**

Message queues like kafka or rabbitmq stores messages in segments(arrays)
Each segment is an array of messages stored sequentially.

Offsets(indexes) make it easy to fetch or replay messages quickly.
Kafka stores logs in append-only arrays and consumers track the index(offset).

Arrays enable fast sequential reads/writes- critical for throughput-heavy systems.
