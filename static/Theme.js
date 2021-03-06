function ThemeUtils(undefined) {
	var self = this;

// Autogenerated with DRAKON Editor 1.32


function build(definition) {
    // item 6
    var image = definition[0];
    var iconBack = definition[1];
    var font = definition[2];
    var iconBorder = definition[3];
    var line = definition[4];
    var backFont = definition[5];
    var background = definition[6];
    var commentBack = definition[7];
    var iconsList = definition[8];
    var defThickness = definition[9]
    var thickness = 1
    // item 162
    if (defThickness == null) {
        
    } else {
        // item 165
        thickness = defThickness
    }
    // item 7
    var icons = {};
    // item 14
    if (iconsList) {
        // item 80001
        var _ind8 = 0;
        var _col8 = iconsList;
        var _len8 = _col8.length;
        while (true) {
            // item 80002
            if (_ind8 < _len8) {
                
            } else {
                break;
            }
            // item 80004
            var iconDef = _col8[_ind8];
            // item 10
            var name = iconDef[0];
            var iconBack2 = iconDef[1];
            var font2 = iconDef[2];
            var iconBorder2 = iconDef[3];
            var altColor = iconDef[4]
            // item 11
            var icon = {
            	name: name,
            	iconBack: iconBack2,
            	font: font2,
            	iconBorder: iconBorder2,
            	altColor: altColor
            };
            // item 12
            icons[name] = icon;
            // item 80003
            _ind8++;
        }
    }
    // item 13
    return {
    	image: image,
    	iconBack: iconBack,
    	font: font,
    	iconBorder: iconBorder,
    	line: line,
    	backFont: backFont,
    	background: background,
    	commentBack: commentBack,
    	icons: icons,
    	thickness: thickness
    };
}

function createDefaultTheme() {
    // item 114
    return ["theme-icon-class.png", "#FFFFFF", "#000000", "#000000", "#000000", "#000000", "#c0d0ff", "#b0b0b0", [
    		["insertion", "#ffffff", "#000000", "none", "#ffffff"],
    		["loopbegin", "#FFFFE0", "#000000", "#000000"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]]
}

function createDefaultThemePrev() {
    // item 118
    return ["theme-icon-nechu.png", "#F5EBE4", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#b0b0b0", [
    		["question", "#e5e6e4", "#000000", "#000000"],
    		["select", "#cfd2cd", "#000000", "#000000"],
    		["loopbegin", "#CAC8C8", "#000000", "#000000"],
    		["callout", "#FFFC96", "#000000", "#000000"]
    	]]
}

function getBackground() {
    // item 42
    if (self.current) {
        // item 21
        return self.current.background;
    } else {
        // item 45
        return Config.BACKGROUND_COLOR;
    }
}

function getCommentBack() {
    // item 96
    if ((self.current) && (self.current.commentBack)) {
        // item 95
        return self.current.commentBack;
    } else {
        // item 99
        return Config.COMMENT_BACK;
    }
}

function getFont() {
    // item 86
    if (self.current) {
        // item 85
        return self.current.backFont;
    } else {
        // item 89
        return Config.LINE_COLOR;
    }
}

function getIconBack(type) {
    // item 47
    if (self.current) {
        // item 53
        var icons = self.current.icons;
        // item 54
        if (type in icons) {
            // item 56
            return icons[type].iconBack;
        } else {
            // item 46
            return self.current.iconBack;
        }
    } else {
        // item 1010001
        if (type === "loopbegin") {
            // item 108
            return "#FFFFE0"
        } else {
            // item 1010002
            if (type === "callout") {
                // item 109
                return "#FFFC96"
            } else {
                // item 50
                return Config.ICON_COLOR;
            }
        }
    }
}

function getIconBorder(type) {
    // item 58
    if (self.current) {
        // item 64
        var icons = self.current.icons;
        // item 65
        if (type in icons) {
            // item 67
            return icons[type].iconBorder;
        } else {
            // item 57
            return self.current.iconBorder;
        }
    } else {
        // item 61
        return Config.BORDER_COLOR;
    }
}

function getIconFont(type) {
    // item 69
    if (self.current) {
        // item 73
        var icons = self.current.icons;
        // item 74
        if (type in icons) {
            // item 76
            return icons[type].font;
        } else {
            // item 156
            if (isRoundedRect(type)) {
                // item 159
                type = "question"
                // item 160
                if (type in icons) {
                    // item 76
                    return icons[type].font;
                } else {
                    // item 68
                    return self.current.font;
                }
            } else {
                // item 177
                if (isPause(type)) {
                    // item 178
                    type = "loopbegin"
                    // item 160
                    if (type in icons) {
                        // item 76
                        return icons[type].font;
                    } else {
                        // item 68
                        return self.current.font;
                    }
                } else {
                    // item 68
                    return self.current.font;
                }
            }
        }
    } else {
        // item 72
        return Config.TEXT_COLOR;
    }
}

function getIconSecondaryBack(type) {
    // item 133
    var result = null
    // item 123
    if (self.current) {
        // item 129
        var icons = self.current.icons;
        // item 130
        if (type in icons) {
            // item 132
            result = icons[type].altColor;
        } else {
            // item 122
            result = self.current.altColor;
        }
    }
    // item 134
    if (result) {
        // item 137
        return result
    } else {
        // item 138
        return getCommentBack()
    }
}

function getLine() {
    // item 78
    if (self.current) {
        // item 77
        return self.current.line;
    } else {
        // item 81
        return Config.LINE_COLOR;
    }
}

function getThickness() {
    // item 169
    if ((self.current) && (!(self.current.thickness == null))) {
        // item 174
        return self.current.thickness
    } else {
        // item 172
        return 1
    }
}

function isPause(type) {
    // item 1840001
    if ((((type === "duration") || (type === "pause")) || (type === "gdur")) || (type === "loopend")) {
        // item 192
        return true
    } else {
        // item 193
        return false
    }
}

function isRoundedRect(type) {
    // item 1440001
    if ((type === "raction") || (type === "f_rounded")) {
        // item 152
        return true
    } else {
        // item 153
        return false
    }
}


this.build = build;
this.getBackground = getBackground;
this.getLine = getLine;
this.getIconBack = getIconBack;
this.getIconFont = getIconFont;
this.getIconBorder = getIconBorder;
this.getFont = getFont;
this.getCommentBack = getCommentBack;
this.getIconSecondaryBack = getIconSecondaryBack
this.getThickness = getThickness


this.current = build(createDefaultTheme())

}
var Theme = new ThemeUtils();
