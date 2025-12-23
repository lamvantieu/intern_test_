import styles from "./Detail.module.css";

const DetailPage = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Detail Page</h2>
            <p className={styles.desc}>
                Style đã được tách riêng, không còn inline.
            </p>
        </div>
    );
};

export default DetailPage;
