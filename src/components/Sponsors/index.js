import { Container } from "components/Container";
import styles from "./index.module.css";

export const Sponsors = () => {
	return (
		<div className={styles.sponsors}>
			<h1 className={styles.title}>sponsored by</h1>
			<div className={styles.logos}>
				<img src="/img/oracle.png" className={styles.logo} />
				<img src="/img/devc.png" className={styles.logo} />
				<img src="/img/obytes.png" className={styles.logo} />
			</div>
		</div>
	);
};
