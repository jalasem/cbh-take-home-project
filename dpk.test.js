const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('returns partitionKey from event when provided', () => {
    const partitionKey = 'testKey';
    const event = { partitionKey };
    expect(deterministicPartitionKey(event)).toBe(partitionKey);
  })

  it("returns a hash based on event data when partitionKey is not provided", () => {
    const event = { key: "value" };
    const hash = deterministicPartitionKey(event);
    expect(hash).not.toBe(undefined);
    expect(hash).toHaveLength(128); // sha3-512 hash length
  });

  it("returns JSON string when partitionKey is a non-string object", () => {
    const partitionKey = { key: "value" };
    const event = { partitionKey };
    const jsonString = deterministicPartitionKey(event);
    expect(jsonString).toBe(JSON.stringify(partitionKey));
  });

  it("returns a hash when partitionKey length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = "a".repeat(257);
    const event = { partitionKey };
    const hash = deterministicPartitionKey(event);
    expect(hash).not.toBe(undefined);
    expect(hash).toHaveLength(128);
  });
});
