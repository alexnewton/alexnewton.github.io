//Pendo Scripts


    (function(apiKey){
        (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
            y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
            z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            pendo.initialize({
                visitor: {
                    id: 'example_id',
                    email: 'alex@example.com',
                    name: 'my name',
                    emailid: 'example_01@pendo.io',
                    role: 'Admin',
                    return_url: 'htpps//www.google.com',
                    segmentTest: myInt

                    // You can add any additional visitor level key-values here,
                    // as long as it's not one of the above reserved names.
                },

                account: {
                    id:           'account_id',
                    name: 'company_name',
                    industry: 'account_industry',
                    // Highly recommended
                    // name:         // Optional
                    // is_paying:    // Recommended if using Pendo Feedback
                    // monthly_value:// Recommended if using Pendo Feedback
                    // planLevel:    // Optional
                    // planPrice:    // Optional
                    // creationDate: // Optional

                    // You can add any additional account level key-values here,
                    // as long as it's not one of the above reserved names.
                }
            });
    })('89dbca8b-5a34-47ee-6216-a46a42cc5742');

//EU Pendo Install

// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.eu.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
//         pendo.initialize({
//             visitor: {
//                 id:              'VISITOR-UNIQUE-ID'   // Required if user is logged in
//                 // email:        // Optional
//                 // role:         // Optional
//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },
//             account: {
//                 id:           'ACCOUNT-UNIQUE-ID' // Highly recommended
//                 // name:         // Optional
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional
//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             }
//         });
// })('89dbca8b-5a34-47ee-6216-a46a42cc5742');

//
// Segment Install
// <script>
//   !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
//   analytics.load("YwftWfBNKY9u0JVe3N1yG9yux5RdCggT");
//   analytics.page();
//   }}();
// </script>

// <script>
// analytics.identify('f4ca124298', {
//   name: 'Michael Bolton',
//   email: 'mbolton@initech.com'
// });
// </script>
 
//  <!-- Other Scripts-->


// <script>

// pendo.track("NAME", {
//   PROPERTY1: "Replace with Function Name",
//   PROPERTY2: "PROPERTY2VALUE",
//   PROPERTYN: "PROPERTYNVALUE"
// });
// </script>

// <!--Intercom Install-->
// <script>
//   window.intercomSettings = {
//     app_id: "pjmruj7i",
//     name: "John Doe", // Full name
//     email: "jesse@pendo.io", // Email address
//     created_at: "1312182000" // Signup date as a Unix timestamp
//   };
// </script>
// <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/pjmruj7i';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
// 
// <!--Pendo Install for Intercom testing-->
// <script>
// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
//     v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
//         pendo.initialize({
//             visitor: {
//                 id:  'Pendo-Intercom',
//                 name: "John Doe",
//                 email: 'jesse@pendo.io',
//             },
//             account: {
//                 id: "Intercom"     ,
//                 Company_name: "Intercom",
//                 accountfield:  '100',
//                 boolean_flag: false
//               }
//         });
//       })('89dbca8b-5a34-47ee-6216-a46a42cc5742');
// </script>
