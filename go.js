var go_current     	= window.location.href;    
    function rChoice(arr) {	    return arr[Math.floor(arr.length * Math.random())];	}
    var direct_link_ads = rChoice([                            "https://google.com"                     ]);
    var ars             = rChoice([                            "https://timdax.net"                       ]);


   NORMAL DIRECT    var pre_current   = ars + window.location.pathname;    go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";    

    //==> ARSAE DIRECT    //go_current     		= ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);    //---------------

    
