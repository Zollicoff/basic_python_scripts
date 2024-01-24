	let pages = dv.pages("#changelog").where(b => b.date_of_changelog >= DateTime.now().minus({weeks:1})).groupBy(b => b.date_of_changelog)

	for (let group of pages.sort(d => d.key, 'desc')) { 
		dv.header(3, group.key);
		dv.table(["File", "Device", "Note"], 
			group.rows 
				.sort(k => k.type, 'des')
				.map(k => [k.file.link, k["device"], k["notes"]]))
	}
