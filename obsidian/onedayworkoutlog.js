//```dataviewjs
let targetDate = DateTime.fromISO("2022-01-01"); // replace with your desired date in YYYY-MM-DD format
let pages = dv.pages("#workouts").where(b => DateTime.fromISO(b.date_of_workout).hasSame(targetDate, 'day')).groupBy(b => b.date_of_workout)

for (let group of pages.sort(d => d.key, 'desc')) { 
    dv.header(6, group.key);
    dv.table(["File", "Exercise", "Set", "Reps", "Time", "Weight"], 
        group.rows 
            .sort(k => k.type, 'asc')
            .map(k => [k.file.link, k["exercise"], k["sets"], k["reps"], k["time"], k["weight"]]))
}
//```
