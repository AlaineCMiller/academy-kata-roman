const numeral = require("./roman-numeral-converter")


test('roman-numeral-converter converts I to 1', () => {
  expect(numeral("I")).toBe(1);
});

test('roman-numeral-converter converts III to 3', () => {
  expect(numeral("III")).toBe(3);
});

test('roman-numeral-converter converts IV to 4', () => {
  expect(numeral("IV")).toBe(4);
});

test('roman-numeral-converter converts V to 5', () => {
  expect(numeral("V")).toBe(5);
});

test('roman-numeral-converter converts VI to 6', () => {
  expect(numeral("VI")).toBe(6);
});

test('roman-numeral-converter converts VIII to 8', () => {
  expect(numeral("VIII")).toBe(8);
});

test('roman-numeral-converter converts IX to 9', () => {
  expect(numeral("IX")).toBe(9);
});

test('roman-numeral-converter converts X to 10', () => {
  expect(numeral("II")).toBe(2);
});

test('roman-numeral-converter converts XI to 11', () => {
  expect(numeral("XI")).toBe(11);
});

test('roman-numeral-converter converts XL to 40', () => {
  expect(numeral("XL")).toBe(40);
});

test('roman-numeral-converter converts L to 50', () => {
  expect(numeral("L")).toBe(50);
});

test('roman-numeral-converter converts CD to 400', () => {
  expect(numeral("CD")).toBe(400);
});

test('roman-numeral-converter converts D to 500', () => {
  expect(numeral("D")).toBe(500);
});

test('roman-numeral-converter converts CM to 900', () => {
  expect(numeral("CM")).toBe(900);
});

test('roman-numeral-converter converts CMI to 901', () => {
  expect(numeral("CMI")).toBe(901);
});

test('roman-numeral-converter converts CD to 400', () => {
  expect(numeral("M")).toBe(1000);
});

test('roman-numeral-converter converts MCMXCIX to 1999', () => {
  expect(numeral("MCMXCIX")).toBe(1999);
});

