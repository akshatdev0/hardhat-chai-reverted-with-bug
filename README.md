To test

```
$ yarn install
$ yarn test
```

The below test should have failed, but passes.

```
  it('Message starting with same prefixes: Should have FAILED, but PASSES', async () => {
    await expect(matchers.doRevert()).to.be.revertedWith('R');
    await expect(matchers.doRevert()).to.be.revertedWith('Re');
    await expect(matchers.doRevert()).to.be.revertedWith('Rev');
    await expect(matchers.doRevert()).to.be.revertedWith('Reve');
    await expect(matchers.doRevert()).to.be.revertedWith('Rever');
    await expect(matchers.doRevert()).to.be.revertedWith('Revert caus');
  });
```

Test Output:

```
✓ Message starting with same prefixes: Should have FAILED, but PASSES (46ms)

```
