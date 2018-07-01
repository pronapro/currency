let request =  window.indexedDb.open("service",1),
db,tx,store,index;

request.onerror = function(e){
	console.log(error);
}
request.onupgradeneeded = function(e){
	let db = request.result;
	store= db.createobjectStore("currencies",{keypath: 'currencyName'}),
	index = store.createIndex("symbol"."currencyId",{unique:true})
}


request.onsuccess = function(e){
	db = request.result;
	tx = db.transaction("currencies","readwrite");
	store= tx.objectStore("currencies");
	index = store.index("currencyId");

	db.onerror = function(e){
		console.log("there is an error at " + e.target.errorCode)
	}

	store.put({currencyName:usa,currencyId:usd,});
	tx.oncomplete = function(e){
		db.close();
	};

}
