<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'sP$gZSG!Z@euv76D%Px2Ybv!4Cg^k&@1Ke]3Mj@An/KQ]7Ej1^v@AGa6D]]B+)Wt');
define('SECURE_AUTH_KEY',  'M2?&U76m:j[i 30H0t1cV ET:)[L]{d:rHjxSt`D8HT{bt_(WY`/w&UTNW5N`ph%');
define('LOGGED_IN_KEY',    'T_Af^&9]@!C4v)blFOuD;|==_=W2m]ojI>+NJo.|5n9m7P-jMS!9,Au%O8D.;%f7');
define('NONCE_KEY',        'Q G0TA]m8P{:s^xH%-gS(/<T_<X])w7d<i5bU:m)NpIgO|PnA9E)LUBFcXL`Y|~k');
define('AUTH_SALT',        'Xd>;4#>@PlodXY=LVBRUrxs-|:~xy[U5<Ms>HCJl.^Vw{vya@?7ufXf|TY;g356.');
define('SECURE_AUTH_SALT', 'gd1R!W[(E>G g{aKv-XQxZb~6`C,`wGZ@XGe/=$i38yEmt`sqb#<~pE=Ts*W;I?:');
define('LOGGED_IN_SALT',   '`ZO,hRaH#AY[QjrM1L)<g@rJQ@l;HevgHq!V,,vs/:g&B`HD`;bgJ,F#h$!wz0~4');
define('NONCE_SALT',       'pE?oO1$^u3Rs;%l>2MmJBRzT%}I>HL.$ hp^KQ M^>6A/aC-(]0T!n}5K^mHf!?d');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');