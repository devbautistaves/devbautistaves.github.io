function submitForm(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    const formData = new FormData(document.getElementById('addressForm'));
    formData['validate_merlin'] = 'true';
    formData['closed_neighborhood_country'] = 'no';
    formData['isMovistarUser'] = 'no';
    formData['form_key'] = 'tGvJCHWgGcAV0dOq';
    // Construir la solicitud fetch
    fetch("https://api.codetabs.com/v1/proxy?quest=https://tienda.movistar.com.ar/hogarinternet/address/address/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          // 'Cookie': 'mage-banners-cache-storage={}; _gcl_au=1.1.337122213.1710553799; session_timestamp=1710553798787; user_timestamp=1710553798787; FirstSession=utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DAR_HOGAR_COL-ZONA-CLARO-MOVISTAR-FIBRA-B2C_22-01-01_SEM_LEAD-WEB_AON_ABT_BRAND_100912%26utm_term%3D%26utm_content%3D%26gclid%3DCjwKCAjw48-vBhBbEiwAzqrZVL7i4WEuzPmii92ZCCyqjXpIlQ8dHa0AfwO7WMtHqEeZ2RhGQHn7zxoCnOYQAvD_BwE%26fbclid%3D%26utm_CC%3DP_SEM_0_0_H%26date%3D20240316; _tt_enable_cookie=1; _ttp=MUMoN4aCW7WzIZefJfCQJpuhO8T; _hjSessionUser_2665312=eyJpZCI6IjAyZTFlZTU2LWUwZjEtNWI3Yy1iYjRhLTUyNWMwZTYzNmEwMiIsImNyZWF0ZWQiOjE3MTA1NTM3OTkxMzEsImV4aXN0aW5nIjp0cnVlfQ==; dtCookie=v_4_srv_9_sn_87E5B40625F45782B6072C22DFB55720_perc_100000_ol_0_mul_1_app-3A817844a4005290ac_0_app-3A525c22d75e08e497_0_app-3A1422ad115832f8ca_0_rcs-3Acss_0; utmsAlreadyCaptured=true; _ga=GA1.4.821099579.1710553799; TLTSID=23029007130511636183140228035575; _SI_VID_1.a8a352b2d200011483d50aec=70d50e78b7332a3f804b3eb1; mousestats_vi=a0eb2c234a49cf059b7d; _hjSessionUser_2665181=eyJpZCI6ImU5NzI2NTc0LWNkYmMtNTJmMS04MGQ5LWZlN2NjMzg1NDRmMSIsImNyZWF0ZWQiOjE3MTA3Nzc2MjAxMTgsImV4aXN0aW5nIjp0cnVlfQ==; _SI_DID_1.a8a352b2d200011483d50aec=c6797409-f0d6-39c1-9bca-6ab62374c01d; _gcl_aw=GCL.1710948096.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gcl_dc=GCL.1710948096.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; int_ses="origin":"utm","utm_source":"undefined","utm_medium":"undefined","utm_campaign":"Not provided","utm_content":"Not provided","aux_utm_campaign":"AR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND"; ReturningSession=utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DAR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND%26utm_term%3D%26utm_content%3D%26gclid%3DCjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE%26fbclid%3D%26utm_CC%3DP_SEM_0_0_H%26date%3D20240320; utms={"utm_source":"google","utm_medium":"cpc","utm_campaign":"AR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND","utm_term":"","utm_content":"","gclid":"CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE","fbclid":"","utm_CC":"P_SEM_0_0_H","date":"20240320"}; _gac_UA-67452816-1=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gac_UA-67452816-5=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gac_UA-67452816-5=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; PHPSESSID=gma50u2j6ut03eoo1na7pt5ukn; attr_source_cookie=direct; _hjSession_2665181=eyJpZCI6Ijk4MDI0NjZhLWNkYmQtNDIwYy04YWE2LTI1NWFmMWM5YTRlMCIsImMiOjE3MTE0MDEwNDk5MjgsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; form_key=tGvJCHWgGcAV0dOq; _gid=GA1.3.265884440.1711401050; _gid=GA1.4.265884440.1711401050; mage-cache-storage={}; mage-cache-storage-section-invalidation={}; mage-cache-sessid=true; mage-messages=; recently_viewed_product={}; recently_viewed_product_previous={}; recently_compared_product={}; recently_compared_product_previous={}; product_data_storage={}; form_key=tGvJCHWgGcAV0dOq; mousestats_si=b9379aa7a4c6f3d6130f; _hjSessionUser_2009238=eyJpZCI6IjU0MjdmOTY4LTE4NjYtNTViZS04NzVkLTk2MWI0NDBmNDUwMCIsImNyZWF0ZWQiOjE3MTE0MDEzMTAyMTEsImV4aXN0aW5nIjpmYWxzZX0=; _hjSession_2009238=eyJpZCI6IjZjMmZhNjExLTJhNWQtNGZlMi04NDE5LWMxNTQxNjdhMDk1OCIsImMiOjE3MTE0MDEzMTAyMTIsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=; _ga=GA1.3.821099579.1710553799; _dc_gtm_UA-67452816-1=1; _gat_UA-67452816-5=1; _uetsid=28375100eaec11ee96ade5b200565e3e; _uetvid=7f5f73a0e33711ee89e00795ca5c66be; _ga_H8QM53FDYK=GS1.3.1711401050.10.1.1711401400.17.0.0; section_data_ids={%22messages%22:1711401398}; _SI_SID_1.a8a352b2d200011483d50aec=28db4399880a4650d6a0bc92.1711401411064.175434; _ga_61RJ6EK95F=GS1.1.1711401049.9.1.1711401411.0.0.0; private_content_version=c9132b2669bc4be1284009dc95f5122e; TS01cd16d1=0106646491198ad54cd284c6dad942f4a1b8c74ec1f9fbe897a75d602526549ba2400a3b4319ed4ff06f99091284c2ba47cfafe5ae181cb30c4a8d9360ce3e763b7e9a51f0c77e7a6d4f4839b8d532b67a63d4f86c02d8d043b8091b3c39fd2128828f799d6d29e9c2c1993d0ac13276883a733056d05361409a7dbe6dc20fced3b683a0d7',
        'Origin': 'https://tienda.movistar.com.ar',
        'Referer': 'https://tienda.movistar.com.ar/hogarinternet/checkout/?gafn=FORM_HOGAR&gafl=CHECKOUT&gasn=ADDRESS_STEP&gast=1',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0',
        'X-Requested-With': 'XMLHttpRequest',
        'sec-ch-ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'x-dtpc': '9$201356010_585h51vPNGUAAHBURLTTLMBNSCMTKWJAUCCDKFH-0e0',
        'Access-Control-Allow-Origin': '*',
      },
      body: new URLSearchParams(formData).toString(),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Hacer algo con la respuesta JSON, si es necesario
      alert("La solicitud se ha enviado correctamente.");
    })
    .catch(error => {
      console.error("Hubo un problema con la operación fetch:", error);
      alert("Hubo un problema al enviar la solicitud.");
    });
  }