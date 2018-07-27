const icon = {
	print: () => {
		let logColor;
		switch (config.configuration) {
			case 'dev':
				logColor = '\x1b[31m';
				break;
			case 'test':
				logColor = '\x1b[33m';
				break;
			case 'prod':
				logColor = '\x1b[32m';
				break;
		}
		console.log(logColor, "                                                                      \n" +
			"                                                                      \n" +
			"                             ./+ossso+:.                              \n" +
			"                         .+hNMMMMMMMMMMMNh/`                          \n" +
			"                       :hMMMMMMMMMMMMMMMMMMNs`                        \n" +
			"                     .hMMMMMMNho/:::/ohMMMMMMN:                       \n" +
			"                    -NMMMMMd/`         `oNMMMMM:                      \n" +
			"                   .NMMMMM+              .NMMMMm`                     \n" +
			"                   hMMMMM/     -ymNNy.    oMMMMM-                     \n" +
			"                  .MMMMMh     /MMMMNh-    sMMMMM.                     \n" +
			"                  :MMMMMo     dMMMM/     +MMMMMd                      \n" +
			"                  -MMMMMs     sMMMMMhooyNMMMMMm.                      \n" +
			"                   mMMMMN`    `yMMMMMMMMMMMMNs`                       \n" +
			"                   /MMMMMd`     -smMMMMMMNh+`                         \n" +
			"                    sMMMMMm:       `-::-.                             \n" +
			"                     oMMMMMMh/                                        \n" +
			"                      -dMMMMMMNy+:`      `./oyhdmmmmdhs+:`            \n" +
			"                        /dMMMMMMMMMMNmmmNMMMMMMMMMMMMMMMMMdo.         \n" +
			"            .----.        :dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd:       \n" +
			"        -odNMMMMMMNdo.      oMMMMMMMMMMMMMMds/-.`  `.:+yNMMMMMMh.     \n" +
			"      /mMMMMMMMMMMMMMMy.     oMMMMMMMMMMm+.              /dMMMMMN:    \n" +
			"    `hMMMMMMmhssymMMMMMN.     dMMMMMMMN+        `..`       /NMMMMN:   \n" +
			"   `mMMMMMy-      :NMMMMh     +MMMMMMm.     `+hNMMMMmy-     -NMMMMm   \n" +
			"   sMMMMM+     `   sMMMMm     /MMMMMN`     oNMMMMMMMMMMo     sMMMMM:  \n" +
			"   mMMMMm     oMNsyMMMMMo     sMMMMM/     sMMMMMmsodMMMN     /MMMMM/  \n" +
			"   NMMMMd     sMMMMMMMNo     .NMMMMm     .MMMMMy   /MMMo     sMMMMM:  \n" +
			"   yMMMMM:     :sdmdy+`     .mMMMMM/     :MMMMM/    ::`     :MMMMMm   \n" +
			"   .NMMMMN/                +NMMMMMo      `NMMMMm.         `oNMMMMN-   \n" +
			"    :NMMMMMd/`          .omMMMMMN/        /MMMMMMy/.```./yNMMMMMm-    \n" +
			"     .hMMMMMMNds+///+ohmMMMMMMMy.          :mMMMMMMMMMMMMMMMMMMs`     \n" +
			"       :hMMMMMMMMMMMMMMMMMMMNs-              /hMMMMMMMMMMMMMdo`       \n" +
			"         .+hNMMMMMMMMMMMMds:`                  `:oyhdddhyo/`          \n" +
			"             .:/+oooo+:.                                              \n" +
			"                                                                      \n" +
			"                                                                      \n");
	}
};
module.exports = icon;