const { expect, use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { ethers } = require('hardhat');

use(chaiAsPromised);

describe('Matchers: revertedWith', () => {
  let matchers;

  beforeEach(async () => {
    const Matchers = await ethers.getContractFactory('Matchers');
    matchers = await Matchers.deploy();
    await matchers.deployed();
  });

  it('Exact Message: PASSES', async () => {
    await expect(matchers.doRevert()).to.be.revertedWith('Revert cause');
  });

  it('Different Messages: FAILES', async () => {
    await expect(
      expect(matchers.doRevert()).to.be.revertedWith('Revert cause 1')
    ).to.be.eventually.rejected;
    await expect(
      expect(matchers.doRevert()).to.be.revertedWith('Different message')
    ).to.be.eventually.rejected;
  });

  it('Message starting with same prefixes: Should have FAILED, but PASSES', async () => {
    await expect(matchers.doRevert()).to.be.revertedWith('R');
    await expect(matchers.doRevert()).to.be.revertedWith('Re');
    await expect(matchers.doRevert()).to.be.revertedWith('Rev');
    await expect(matchers.doRevert()).to.be.revertedWith('Reve');
    await expect(matchers.doRevert()).to.be.revertedWith('Rever');
    await expect(matchers.doRevert()).to.be.revertedWith('Revert caus');
  });
});
