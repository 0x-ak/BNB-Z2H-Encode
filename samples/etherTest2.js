(async () => {
  try {
    console.log('deploy...');
    // Connect web3
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    console.log(`Connected to Wallet: ${accounts[0]}`);

    const accounts = await provider.listAccounts();

    console.log(`First Account: ${accounts[0]}`);
    } catch (e) {
        console.log(e.message)
    }
})()

