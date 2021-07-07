import Web3 from 'web3';

export const getWeb3Instance = () => {
  const windowObj = window as any;
  const { ethereum } = windowObj;
  const web3 = new Web3(ethereum);
  return web3;
};

export const isMetaMaskInstalled = () => {
  const windowObj = window as any;
  const { ethereum } = windowObj;
  return ethereum && ethereum.isMetaMask;
};

export const getContractInstance = (
  ABIContract: any,
  contractAddress: string,
) => {
  const windowObj = window as any;
  const { ethereum } = windowObj;
  if (ethereum && ethereum.isMetaMask) {
    const web3Instance = new Web3(ethereum);
    return new web3Instance.eth.Contract(ABIContract, contractAddress);
  } else if (windowObj.web3) {
    const web3Instance = new Web3(windowObj.web3.currentProvider);
    return new web3Instance.eth.Contract(ABIContract, contractAddress);
  } else {
    return null;
  }
};
