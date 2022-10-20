
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    app: {
      appid: 'DEMO',
      secret: 'aghejee8tzh74',
      clientHost : 'http://localhost:3000/api/',
      cookiesName : 'demo-app',
      cookiesSecret : 'wrxv9UXBWiw0acL04enmej05BJ4BBbVe'
    },
    apiURL: {
      baseApi: 'https://demoapi.botbo21.com/apiv1/user/',
      register: '/m_register',
      forgetpass: '/m_forgetpass',
      uchangepass: 'm_uchangepass',
      checkexits: '/m_checkexits',
      login: '/m_login',
      checklogin: '/m_checklogin',
      banklists: '/m_banklists',
      bankverify: '/m_bankverify',
      sentotp: 'm_sentotp',
      info: '/m_info',
      updateinfo: '/m_updateinfo',
      updatebank: '/m_updatebank',
      bankdeposit: 'm_bankdeposit',
      weblogin: '/m_weblogin',
      webbalance: '/m_webbalance',
      udeposit: '/m_udeposit',
      uwithdraw: '/m_uwithdraw',
      didbonus: '/m_didbonus',
      widbonus: '/m_widbonus',
      udepositlists: '/m_udepositlists',
      uwithdrawlists: '/m_uwithdrawlists',
      udidwidlists: '/m_udidwidlists',
      canceldeposit: '/m_canceldeposit',
    }
  }
}