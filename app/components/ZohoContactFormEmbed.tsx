'use client';

import React, { useEffect } from 'react';

export default function ZohoContactFormEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e588dcc8cc6828ffe8f7ceb9892c7f15e57cf7b60c9d004dc8a9459d822b5e3135289fa3412656928da52275c5f30fe8gid9a7abe81539e84ad10df552a13378fc6778287674ce4d7136507941fca6c6b19gid52cb9a8c2aa797021ac82eb77e69941f8e5612bbbcd426abf29e940a19a9fd1agid7736def81a5feaf743989300755d1f451b5eb71079faa47c2508efa121de1142&tw=975076874969f4d3e77c80b0c2735e5328203d083358c61c38c6fbd6cab0089e';
    script.id = 'wf_anal';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      title="Formulaire de contact Zoho"
      src="/zoho-contact.html"
      style={{
        width: '100%',
        height: '500px',
        border: 'none',
      }}
      frameBorder="0"
    />
  );
}
