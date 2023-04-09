const crypto = require("crypto");

const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (data) => crypto
  .createHash("sha3-512")
  .update(data)
  .digest("hex");

exports.deterministicPartitionKey = (event) => {
  if (!event) return "0";

  let candidate = event.partitionKey ? event.partitionKey : createHash(JSON.stringify(event));
  
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? createHash(candidate) : candidate;
};
