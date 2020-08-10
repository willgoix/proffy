module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
    // insert on 'proffys'
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffyId = insertedProffy.lastID

    // insert on 'classes'
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                ${classValue.subject},
                "${classValue.cost}",
                ${proffyId}
            );
    `)

    const classId = insertedClass.lastID

    // insert on 'class_schedule'
    const insertedClassScheduleValues = classScheduleValues.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                ${classId},
                ${value.weekday},
                ${value.time_from},
                ${value.time_to}
            );
        `)
    })

    await Promise.all(insertedClassScheduleValues)
}