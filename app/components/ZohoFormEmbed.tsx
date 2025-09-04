'use client';

import React, { useEffect } from 'react';

export default function ZohoFormEmbed() {
  useEffect(() => {
    // Script Analytics Zoho (extrait de ton fichier)
    const script = document.createElement('script');
    script.src =
      'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=293865ac8bac4f3d228ea3ca046d30b588b8bd5e1327942edf3ac12c99a7c650a07a5bfa7dd2de5b5759491c39785031gide10ef0d82903105f14474df86c597c0f92d0c88dbbcf610602722d182457ae5bgide6e95d7781cd0a3b5cfc42ed42edddff401d3f096c13ecfd02e02e0ef2c67133gid6d376f7ca6f4936611e62541f71729f1896f4a384b528541871bb63f826164fe&tw=6908d70c486c63d8ead2da472a173380e22ad7ab5751130a8a2e52640c57e5a2';
    script.id = 'wf_anal';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="zoho-form-container" style={{ backgroundColor: '#fff', maxWidth: '800px', margin: '0 auto' }}>
      <iframe
  title="Formulaire Zoho"
  src="/zoho-form.html"
  style={{
    width: '100%',
    height: '600px',
    border: 'none',
  }}
  frameBorder="0"
/>

    </div>
  );
}
