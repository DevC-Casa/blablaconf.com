import Link from "next/link";
import Logo from "./Logo";
import styles from "./index.module.css";

export const Header = ({ isHome = false }) => (
	<div className={styles.header}>
		<div>
			<Link href="/">
				<a>
					<Logo />
				</a>
			</Link>
		</div>

		<div className={styles.links}>
			<a
				href="/#about"
				className={styles.link}
				onClick={(e) => isHome && scrollToSection(e, "#about")}
			>
				About
			</a>
			<a
				href="/#speakers"
				className={styles.link}
				onClick={(e) => isHome && scrollToSection(e, "#speakers")}
			>
				Speakers
			</a>
			<a
				href="/#agenda"
				className={styles.link}
				onClick={(e) => isHome && scrollToSection(e, "#agenda")}
			>
				Agenda
			</a>
		</div>
	</div>
);

const scrollToSection = (e, selector) => {
	e.preventDefault();
	document.querySelector(selector)?.scrollIntoView({
		behavior: "smooth",
	});
};
