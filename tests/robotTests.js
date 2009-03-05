dojo.provide("dijit.tests.robotTests");

try{
if(dojo.isBrowser){
	var userArgs = window.location.search.replace(/[\?&](dojoUrl|testUrl|testModule)=[^&]*/g,"").replace(/^&/,"?");

	// Safari doesn't support focus on nodes like <div>, so keyboard isn't supported there.
	var test_a11y = dojo.isFF || dojo.isIE;

	// infrastructure tests
	doh.registerUrl("dijit/tests/robot/test_deferredConnect.html", dojo.moduleUrl("dijit","tests/robot/test_deferredConnect.html"+(userArgs+"&testWidget=dijit.form.ComboBox").replace(/^&/,"?")), 99999999);
	
	// form widget tests
	doh.registerUrl("dijit/tests/form/robot/test_ComboBox.html", dojo.moduleUrl("dijit","tests/form/robot/_autoComplete.html"+(userArgs+"&testWidget=dijit.form.ComboBox").replace(/^&/,"?")), 99999999);
	doh.registerUrl("dijit/tests/form/robot/test_FilteringSelect.html", dojo.moduleUrl("dijit","tests/form/robot/_autoComplete.html"+(userArgs+"&testWidget=dijit.form.FilteringSelect").replace(/^&/,"?")), 99999999);
	doh.registerUrl("dijit/tests/form/robot/Slider_mouse.html", dojo.moduleUrl("dijit","tests/form/robot/Slider_mouse.html"+userArgs), 99999999);
	doh.registerUrl("dijit/tests/form/robot/Spinner_mouse.html", dojo.moduleUrl("dijit","tests/form/robot/Spinner_mouse.html"+userArgs), 99999999);
	doh.registerUrl("dijit/tests/form/robot/test_validate.html", dojo.moduleUrl("dijit","tests/form/robot/test_validate.html"+userArgs), 99999999);
	if(test_a11y){
		doh.registerUrl("dijit/tests/form/robot/Slider_a11y.html", dojo.moduleUrl("dijit","tests/form/robot/Slider_a11y.html"+userArgs), 99999999);
		doh.registerUrl("dijit/tests/form/robot/Spinner_a11y.html", dojo.moduleUrl("dijit","tests/form/robot/Spinner_a11y.html"+userArgs), 99999999);
	}

	// top level widget tests
	doh.registerUrl("dijit/tests/robot/Menu_mouse.html", dojo.moduleUrl("dijit","tests/robot/Menu_mouse.html"+userArgs), 99999999);
	if(test_a11y){
		doh.registerUrl("dijit/tests/robot/Tree_a11y.html", dojo.moduleUrl("dijit","tests/robot/Tree_a11y.html"+userArgs), 99999999);
		doh.registerUrl("dijit/tests/robot/Menu_a11y.html", dojo.moduleUrl("dijit","tests/robot/Menu_a11y.html"+userArgs), 99999999);
	}
}
}catch(e){
	doh.debug(e);
}
