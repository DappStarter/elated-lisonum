require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew place hospital hover problem equal gate'; 
let testAccounts = [
"0x41aa4f4452546e26a15a86bdf02ecd37c2f450c75ef53d26217761361cbf73d8",
"0xf50f6a4a9ba72ff0e84eee86950acc1f302f009d341cd288de0229b983164860",
"0x2cf47bf9db8fba519bbcfa4b83cdc19deaa9838f8cebfc969d729563a55d4600",
"0x773142f9ddcbf8b5a861c7c6284cfd69f748e3486ef412acb5806ec940d32abd",
"0xa58390beaec695636a6f59d006b6a01945beb1b59a5e45db102b801c3c04cf40",
"0x957a25da33d3f02a1bdf91cb6a13936b438e3c4f585c5cdd311c622d9ffd992c",
"0x1da94d9e96b1118fd019aea72bf734d21f15934205f156aa2f20c3952870bbf5",
"0x4c98d7b0d3b1b93825895b8ec5bca3b17a774021cf57b3537f8a84d5b8e1ee34",
"0xf047128c731f0b554324268e400a450f1216b597a93b8a7febcf02da4ca47d1d",
"0x27ce7405027a49846a6dc62f29b86badb38ffb5d388c7d27a78c444dfb92e986"
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
