declare interface AccountSchema {
  customerId: number;
  accountName: string;
  accountNumber: number;
  accountBalance: number;
  password: string;
  txns: [
    {
      type: string;
      player2: number;
      amount: number;
      comment: string;
      txnId: number;
    }
  ];
}

declare interface AccountsListSchema {
  accounts: accountSchema[];
}
