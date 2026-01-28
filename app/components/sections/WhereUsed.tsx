
import styles from './WhereUsed.module.css';

export default function WhereUsed() {
    const items = [
        "Посты охраны / КПП",
        "Диспетчерские и технические помещения",
        "Заводы",
        "Ветровые электростанции",
        "Мобильные офисы и школы",
        "Военное строительство",
        "Жилые и медицинские объекты"
    ];

    return (
        <section className={`section`}>
            <div className={`container`}>
                <h2 className={styles.title}>Сферы применения</h2>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.text}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
