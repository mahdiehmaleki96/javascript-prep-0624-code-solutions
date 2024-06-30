/* exported isUpperCased */
/* global expect, isUpperCased */
function isUpperCased(word) {
  const uppercase = word.toUpperCase();
  if (uppercase === word) {
    return true;
  } else {
    return false;
  }
}
describe('isUpperCased(word)', function () {
  beforeEach(function () {
    expect(isUpperCased).to.be.a('function');
  });

  it('returns false for "LearningFuze"', function () {
    const input = 'LearningFuze';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns false for "JavaScript"', function () {
    const input = 'JavaScript';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "HTML"', function () {
    const input = 'HTML';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });

  it('returns false for "css"', function () {
    const input = 'css';
    const output = isUpperCased(input);
    expect(output).to.equal(false);
  });

  it('returns true for "PHP"', function () {
    const input = 'PHP';
    const output = isUpperCased(input);
    expect(output).to.equal(true);
  });
});
