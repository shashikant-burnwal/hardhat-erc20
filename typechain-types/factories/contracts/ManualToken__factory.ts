/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ManualToken,
  ManualTokenInterface,
} from "../../contracts/ManualToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610420806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806370a0823114610046578063beabacc814610076578063dd62ed3e14610092575b600080fd5b610060600480360381019061005b91906101d8565b6100c2565b60405161006d91906102a7565b60405180910390f35b610090600480360381019061008b9190610245565b6100da565b005b6100ac60048036038101906100a79190610205565b610189565b6040516100b991906102a7565b60405180910390f35b60006020528060005260406000206000915090505481565b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101289190610318565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461017d91906102c2565b92505081905550505050565b6001602052816000526040600020602052806000526040600020600091509150505481565b6000813590506101bd816103bc565b92915050565b6000813590506101d2816103d3565b92915050565b6000602082840312156101ee576101ed6103b7565b5b60006101fc848285016101ae565b91505092915050565b6000806040838503121561021c5761021b6103b7565b5b600061022a858286016101ae565b925050602061023b858286016101ae565b9150509250929050565b60008060006060848603121561025e5761025d6103b7565b5b600061026c868287016101ae565b935050602061027d868287016101ae565b925050604061028e868287016101c3565b9150509250925092565b6102a18161037e565b82525050565b60006020820190506102bc6000830184610298565b92915050565b60006102cd8261037e565b91506102d88361037e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561030d5761030c610388565b5b828201905092915050565b60006103238261037e565b915061032e8361037e565b92508282101561034157610340610388565b5b828203905092915050565b60006103578261035e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6103c58161034c565b81146103d057600080fd5b50565b6103dc8161037e565b81146103e757600080fd5b5056fea264697066735822122049fce12c7f694b62153675bee5de95fc16cd5d0278d3e1e7aa0b10e337cbcd1d64736f6c63430008070033";

type ManualTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManualTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ManualToken__factory extends ContractFactory {
  constructor(...args: ManualTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ManualToken> {
    return super.deploy(overrides || {}) as Promise<ManualToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ManualToken {
    return super.attach(address) as ManualToken;
  }
  override connect(signer: Signer): ManualToken__factory {
    return super.connect(signer) as ManualToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManualTokenInterface {
    return new utils.Interface(_abi) as ManualTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ManualToken {
    return new Contract(address, _abi, signerOrProvider) as ManualToken;
  }
}
