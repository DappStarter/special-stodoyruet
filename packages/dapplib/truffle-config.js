require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth soccer mistake good knock frame tuna'; 
let testAccounts = [
"0x8a570ff84d27467b588af75855fbe4d4095ca7ec332b61c821f6b71971646274",
"0x54e22d87b3b7df060d2ece6c2a01ef67e4a21c8b97ee37328cbd1e2cc75d70d0",
"0x4cbfb7666b76d717fb0052ce865df0a275317543d9b03fa6a3a0e7ebcc964b32",
"0x67012bea76c9247cd22d4f1f67a32b37127b7685743c4f48ff5066a671008791",
"0x737bcbd6f4bcde3ed0b606dff07432780b2818fcbc98c75326edfad173a3b20f",
"0xfa85f5a32c9e5fd6a9837ba893e9acf4f5245cf09dac0f0195c349c871939828",
"0x3a8d13123f25dac08fdd5d4d6626fa945bd0f5549be7dbc116cfd870e8b6dd49",
"0x820c258186767c25ffde234d63caeae9735239eba5c2573176e9c2d83988a7ef",
"0xda2a52595f7d1b7c6027b40f2ca802e804458737d96d584c1896c5968f5c2dee",
"0x6f0b7dbc14bf385e7bd1ebaa0870a06d8194fc2df546845fda14ea7eceb4f6f2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
