
function submitForm(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Obtener los valores del formulario
  const street = document.getElementById("street").value;
  const number = document.getElementById("number").value;
  const province = document.getElementById("province").value;
  const location = document.getElementById("location").value;
  const postcode = document.getElementById("postcode").value;

  // Construir el cuerpo de la solicitud
  const body = `street=${encodeURIComponent(street)}&number=${encodeURIComponent(number)}&province=${encodeURIComponent(province)}&location=${encodeURIComponent(location)}&postcode=${encodeURIComponent(postcode)}&validate_merlin=true&closed_neighborhood_country=no&isMovistarUser=no&form_key=cw9ZFXAVtbY9dAc9`;

  // Realizar la solicitud fetch
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://tienda.movistar.com.ar/hogarinternet/address/address/')}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "es-ES,es;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Opera GX\";v=\"107\", \"Chromium\";v=\"121\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "mage-banners-cache-storage={}; _gcl_au=1.1.337122213.1710553799; session_timestamp=1710553798787; user_timestamp=1710553798787; FirstSession=utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DAR_HOGAR_COL-ZONA-CLARO-MOVISTAR-FIBRA-B2C_22-01-01_SEM_LEAD-WEB_AON_ABT_BRAND_100912%26utm_term%3D%26utm_content%3D%26gclid%3DCjwKCAjw48-vBhBbEiwAzqrZVL7i4WEuzPmii92ZCCyqjXpIlQ8dHa0AfwO7WMtHqEeZ2RhGQHn7zxoCnOYQAvD_BwE%26fbclid%3D%26utm_CC%3DP_SEM_0_0_H%26date%3D20240316; _tt_enable_cookie=1; _ttp=MUMoN4aCW7WzIZefJfCQJpuhO8T; _hjSessionUser_2665312=eyJpZCI6IjAyZTFlZTU2LWUwZjEtNWI3Yy1iYjRhLTUyNWMwZTYzNmEwMiIsImNyZWF0ZWQiOjE3MTA1NTM3OTkxMzEsImV4aXN0aW5nIjp0cnVlfQ==; dtCookie=v_4_srv_9_sn_87E5B40625F45782B6072C22DFB55720_perc_100000_ol_0_mul_1_app-3A817844a4005290ac_0_app-3A525c22d75e08e497_0_app-3A1422ad115832f8ca_0_rcs-3Acss_0; utmsAlreadyCaptured=true; _ga=GA1.4.821099579.1710553799; TLTSID=23029007130511636183140228035575; _SI_VID_1.a8a352b2d200011483d50aec=70d50e78b7332a3f804b3eb1; mousestats_vi=a0eb2c234a49cf059b7d; _hjSessionUser_2665181=eyJpZCI6ImU5NzI2NTc0LWNkYmMtNTJmMS04MGQ5LWZlN2NjMzg1NDRmMSIsImNyZWF0ZWQiOjE3MTA3Nzc2MjAxMTgsImV4aXN0aW5nIjp0cnVlfQ==; _SI_DID_1.a8a352b2d200011483d50aec=c6797409-f0d6-39c1-9bca-6ab62374c01d; _gcl_aw=GCL.1710948096.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gcl_dc=GCL.1710948096.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; int_ses=\"origin\":\"utm\",\"utm_source\":\"undefined\",\"utm_medium\":\"undefined\",\"utm_campaign\":\"Not provided\",\"utm_content\":\"Not provided\",\"aux_utm_campaign\":\"AR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND\"; ReturningSession=utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DAR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND%26utm_term%3D%26utm_content%3D%26gclid%3DCjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE%26fbclid%3D%26utm_CC%3DP_SEM_0_0_H%26date%3D20240320; utms={\"utm_source\":\"google\",\"utm_medium\":\"cpc\",\"utm_campaign\":\"AR_INSTITUCIONAL_COL-MOVISTAR-B2C_24-01-01_SEM_LDS-WEB_AON_RLSA_BRAND\",\"utm_term\":\"\",\"utm_content\":\"\",\"gclid\":\"CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE\",\"fbclid\":\"\",\"utm_CC\":\"P_SEM_0_0_H\",\"date\":\"20240320\"}; _gac_UA-67452816-1=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gac_UA-67452816-5=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; _gac_UA-67452816-5=1.1710948097.CjwKCAjwkuqvBhAQEiwA65XxQKd8wa4i6odMZpgvabdtwau_XKpEYZwKmSXtrlsZkv-i3fWvcJLYrhoCLQcQAvD_BwE; attr_source_cookie=direct; _hjSessionUser_2009238=eyJpZCI6IjU0MjdmOTY4LTE4NjYtNTViZS04NzVkLTk2MWI0NDBmNDUwMCIsImNyZWF0ZWQiOjE3MTE0MDEzMTAyMTEsImV4aXN0aW5nIjpmYWxzZX0=; PHPSESSID=mdpg84fa4l7hsvpnp5498kb9mb; form_key=cw9ZFXAVtbY9dAc9; _hjSession_2665181=eyJpZCI6IjJmZTkyOTE3LTdjYzAtNDA5ZS1hMDVjLTQwOTg1YjY1YzEyMiIsImMiOjE3MTE1NjY5NjIxOTgsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MX0=; _gid=GA1.3.1317218752.1711566962; _gid=GA1.4.1317218752.1711566962; mage-cache-storage={}; mage-cache-storage-section-invalidation={}; mage-cache-sessid=true; form_key=cw9ZFXAVtbY9dAc9; mage-messages=; recently_viewed_product={}; recently_viewed_product_previous={}; recently_compared_product={}; recently_compared_product_previous={}; product_data_storage={}; mousestats_si=f574ec44ced304043a65; private_content_version=10b61bada29475fbb6df461e04934a72; section_data_ids={%22messages%22:1711566988}; TS01cd16d1=0106646491b6ed21c953e6efa507f046c2a6807abaddc25f04b53f8effa95f60afcd3240b91e5ce982733ac7982c2bf5ec7d3af86bafe6af8ba5ef75145dda33e3f690c9ec10df5b52b03145de14d7c9bb55dee00eb23287381b808ccabf6830c3735528f15122532e2d33a1e57def58ad875748dcbfa7614cf082a9def3c6ab73c3f203df; _ga=GA1.3.821099579.1710553799; _dc_gtm_UA-67452816-1=1; _gat_UA-67452816-1=1; _gat_UA-67452816-5=1; _uetsid=73ad2ee0ec6e11eeb6eb217aaf237dee; _uetvid=7f5f73a0e33711ee89e00795ca5c66be; _ga_H8QM53FDYK=GS1.3.1711566962.11.1.1711567394.60.0.0; _ga_61RJ6EK95F=GS1.1.1711566962.10.1.1711567394.0.0.0; _SI_SID_1.a8a352b2d200011483d50aec=03326c89563b9950ccc713fd.1711567436771.284095",
        "Referer": "https://tienda.movistar.com.ar/hogarinternet/checkout/?gafn=FORM_HOGAR&gafl=CHECKOUT&gasn=ADDRESS_STEP&gast=1",
    },
    referrer: "https://tienda.movistar.com.ar/hogarinternet/checkout/?gafn=FORM_HOGAR&gafl=CHECKOUT&gasn=ADDRESS_STEP&gast=1",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: body
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