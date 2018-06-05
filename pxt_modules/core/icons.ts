/*
The MIT License (MIT)

Copyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed
in the accompanying AUTHORS file

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython

enum IconNames {
    //% block="heart"
    //% blockImage=1
    Heart = 0,
    //% block="small heart"
    //% blockImage=1
    SmallHeart,
    //% block="yes"
    //% blockImage=1
    Yes,
    //% block="no"
    //% blockImage=1
    No,
    //% block="happy"
    //% blockImage=1
    Happy,
    //% block="sad"
    //% blockImage=1
    Sad,
    //% block="confused"
    //% blockImage=1
    Confused,
    //% block="angry"
    //% blockImage=1
    Angry,
    //% block="asleep"
    //% blockImage=1
    Asleep,
    //% block="surprised"
    //% blockImage=1
    Surprised,
    //% block="silly"
    //% blockImage=1
    Silly,
    //% block="fabulous"
    //% blockImage=1
    Fabulous,
    //% block="meh"
    //% blockImage=1
    Meh,
    //% block="t-shirt"
    //% blockImage=1
    TShirt,
    //% block="roller skate"
    //% blockImage=1
    Rollerskate,
    //% block="duck"
    //% blockImage=1
    Duck,
    //% block="house"
    //% blockImage=1
    House,
    //% block="tortoise"
    //% blockImage=1
    Tortoise,
    //% block="butterfly"
    //% blockImage=1
    Butterfly,
    //% block="stick figure"
    //% blockImage=1
    StickFigure,
    //% block="ghost"
    //% blockImage=1
    Ghost,
    //% block="sword"
    //% blockImage=1
    Sword,
    //% block="giraffe"
    //% blockImage=1
    Giraffe,
    //% block="skull"
    //% blockImage=1
    Skull,
    //% block="umbrella"
    //% blockImage=1
    Umbrella,
    //% block="snake"
    //% blockImage=1
    Snake,
    //% block="rabbit"
    //% blockImage=1
    Rabbit,
    //% block="cow"
    //% blockImage=1
    Cow,
    //% block="quarter note"
    //% blockImage=1
    QuarterNote,
    //% block="eigth note"
    //% blockImage=1
    EigthNote,
    //% block="pitchfork"
    //% blockImage=1
    Pitchfork,
    //% block="target"
    //% blockImage=1
    Target,
    //% block="triangle"
    //% blockImage=1
    Triangle,
    //% block="left triangle"
    //% blockImage=1
    LeftTriangle,
    //% block="chess board"
    //% blockImage=1
    Chessboard,
    //% block="diamond"
    //% blockImage=1
    Diamond,
    //% block="small diamond"
    //% blockImage=1
    SmallDiamond,
    //% block="square"
    //% blockImage=1
    Square,
    //% block="small square"
    //% blockImage=1
    SmallSquare,
    //% block="scissors"
    //% blockImage=1
    Scissors
}

enum ArrowNames {
    //% blockIdentity=images.arrowNumber
    North = 0,
    //% blockIdentity=images.arrowNumber
    NorthEast,
    //% blockIdentity=images.arrowNumber
    East,
    //% blockIdentity=images.arrowNumber
    SouthEast,
    //% blockIdentity=images.arrowNumber
    South,
    //% blockIdentity=images.arrowNumber 
    SouthWest,
    //% blockIdentity=images.arrowNumber
    West,
    //% blockIdentity=images.arrowNumber
    NorthWest,
}

namespace basic {

    /**
     * Draws the selected icon on the LED screen
     */
    //% weight=90 blockGap=8
    //% blockId=basic_show_icon 
    //% block="show icon %i" icon="\uf00a"
    //% parts="ledmatrix"
    //% help=basic/show-icon
    //% blockFieldEditor="FieldGridPicker"
    //% blockFieldEditorParams.width=400 blockFieldEditorParams.columns=5
    //% blockFieldEditorParams.itemColour=black blockFieldEditorParams.tooltips=true
    export function showIcon(icon: IconNames) {
        let res = images.iconImage(icon)
        res.showImage(0)
    }

    //% weight=50 blockGap=8
    //% blockId=basic_show_arrow 
    //% block="show arrow %i=device_arrow"
    //% parts="ledmatrix"
    //% advanced=true
    //% help=basic/show-arrow
    export function showArrow(i: number) {
        let res = images.arrowImage(i)
        res.showImage(0)
    }
}


namespace images {

    //% weight=50 blockGap=8
    //% blockId=builtin_arrow_image block="arrow image %i=device_arrow"
    export function arrowImage(i : ArrowNames): Image {
            switch(i) {
            // compass directions
            case ArrowNames.North: return images.createImage(`    
                                        . . # . .
                                        . # # # .
                                        # . # . #
                                        . . # . .
                                        . . # . .`);
            case ArrowNames.NorthEast: return images.createImage(` 
                                        . . # # #
                                        . . . # #
                                        . . # . #
                                        . # . . .
                                        # . . . .`);
            case  ArrowNames.East: return images.createImage(` 
                                        . . # . .
                                        . . . # .
                                        # # # # #
                                        . . . # .
                                        . . # . .`);
            case ArrowNames.SouthEast: return images.createImage(` 
                                        # . . . .
                                        . # . . .
                                        . . # . #
                                        . . . # #
                                        . . # # #`);
            case ArrowNames.South: return images.createImage(` 
                                        . . # . .
                                        . . # . .
                                        # . # . #
                                        . # # # .
                                        . . # . .`);
            case ArrowNames.SouthWest: return images.createImage(` 
                                        . . . . #
                                        . . . # .
                                        # . # . .
                                        # # . . .
                                        # # # . .`);
            case ArrowNames.West: return images.createImage(` 
                                        . . # . .
                                        . # . . .
                                        # # # # #
                                        . # . . .
                                        . . # . .`);
            case ArrowNames.NorthWest: return images.createImage(` 
                                        # # # . .
                                        # # . . .
                                        # . # . .
                                        . . . # .
                                        . . . . #`);
            default:                return images.createImage(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        `);
       }
    }
    
    //% weight=50 blockGap=8
    //% blockId=builtin_image block="icon image %i"
    export function iconImage(i: IconNames): Image {
            switch (i) {
            case IconNames.Heart : return images.createImage(`
                                        . # . # .
                                        # # # # #
                                        # # # # #
                                        . # # # .
                                        . . # . .`);

            case IconNames.SmallHeart : return images.createImage(`
                                        . . . . .
                                        . # . # .
                                        . # # # .
                                        . . # . .
                                        . . . . .`);
                                            //faces
            case IconNames.Happy: return images.createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        # . . . #
                                        . # # # .`);
            case IconNames.Sad: return images.createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        . # # # .
                                        # . . . #`);
            case IconNames.Confused: return images.createImage(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        . # . # .
                                        # . # . #`);
            case IconNames.Angry: return images.createImage(`
                                        # . . . #
                                        . # . # .
                                        . . . . .
                                        # # # # #
                                        # . # . #`);
            case IconNames.Asleep: return images.createImage(`
                                        . . . . .
                                        # # . # #
                                        . . . . .
                                        . # # # .
                                        . . . . .`);
            case IconNames.Surprised: return images.createImage(`
                                        . # . # .
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        . . # . .`);
            case IconNames.Silly: return images.createImage(`
                                        # . . . #
                                        . . . . .
                                        # # # # #
                                        . . . # #
                                        . . . # #`);
            case IconNames.Fabulous: return images.createImage(`
                                        # # # # #
                                        # # . # #
                                        . . . . .
                                        . # . # .
                                        . # # # .`);
            case IconNames.Meh: return images.createImage(`
                                        # # . # #
                                        . . . . .
                                        . . . # .
                                        . . # . .
                                        . # . . .`);
            case IconNames.Yes: return images.createImage(`
                                        . . . . .
                                        . . . . #
                                        . . . # .
                                        # . # . .
                                        . # . . .`);
            case IconNames.No: return images.createImage(`
                                        # . . . #
                                        . # . # .
                                        . . # . .
                                        . # . # .
                                        # . . . #`);
            case IconNames.Triangle: return images.createImage(`
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        # # # # #
                                        . . . . .`);
            case IconNames.LeftTriangle: return images.createImage(`
                                        # . . . .
                                        # # . . .
                                        # . # . .
                                        # . . # .
                                        # # # # #`);
            case IconNames.Chessboard: return images.createImage(`
                                        . # . # .
                                        # . # . #
                                        . # . # .
                                        # . # . #
                                        . # . # .`);
            case IconNames.Diamond: return images.createImage(`
                                        . . # . .
                                        . # . # .
                                        # . . . #
                                        . # . # .
                                        . . # . .`);
            case IconNames.SmallDiamond: return images.createImage(`
                                        . . . . .
                                        . . # . .
                                        . # . # .
                                        . . # . .
                                        . . . . .`);
            case IconNames.Square: return images.createImage(`
                                        # # # # #
                                        # . . . #
                                        # . . . #
                                        # . . . #
                                        # # # # #`);
            case IconNames.SmallSquare: return images.createImage(`
                                        . . . . .
                                        . # # # .
                                        . # . # .
                                        . # # # .
                                        . . . . .`);

            case IconNames.Scissors: return images.createImage(`
                                        # # . . #
                                        # # . # .
                                        . . # . .
                                        # # . # .
                                        # # . . #`);
                                            // The following images were designed by Abbie Brooks.
            case IconNames.TShirt: return images.createImage(`
                                        # # . # #
                                        # # # # #
                                        . # # # .
                                        . # # # .
                                        . # # # .`);
            case IconNames.Rollerskate: return images.createImage(`
                                        . . . # #
                                        . . . # #
                                        # # # # #
                                        # # # # #
                                        . # . # .`);
            case IconNames.Duck: return images.createImage(`
                                        . # # . .
                                        # # # . .
                                        . # # # #
                                        . # # # .
                                        . .. . .`);
            case IconNames.House: return images.createImage(`
                                        . . # . .
                                        . # # # .
                                        # # # # #
                                        . # # # .
                                        . # . # .`);
            case IconNames.Tortoise: return images.createImage(`
                                        . . . . .
                                        . # # # .
                                        # # # # #
                                        . # . # .
                                        . . . . .`);
            case IconNames.Butterfly: return images.createImage(`
                                        # # . # #
                                        # # # # #
                                        . . # . .
                                        # # # # #
                                        # # . # #`);
            case IconNames.StickFigure: return images.createImage(`
                                        . . # . .
                                        # # # # #
                                        . . # . .
                                        . # . # .
                                        # . . . #`);
            case IconNames.Ghost: return images.createImage(`
                                        . # # # .
                                        # . # . #
                                        # # # # #
                                        # # # # #
                                        # . # . #`);
            case IconNames.Sword: return images.createImage(`
                                        . . # . .
                                        . . # . .
                                        . . # . .
                                        . # # # .
                                        . . # . .`);
            case IconNames.Giraffe: return images.createImage(`
                                        # # . . .
                                        . # . . .
                                        . # . . .
                                        . # # # .
                                        . # . # .`);
            case IconNames.Skull: return images.createImage(`
                                        . # # # .
                                        # . # . #
                                        # # # # #
                                        . # # # .
                                        . # # # .`);
            case IconNames.Umbrella: return images.createImage(`
                                        . # # # .
                                        # # # # #
                                        . . # . .
                                        # . # . .
                                        # # # . .`);
            case IconNames.Snake: return images.createImage(`
                                        # # . . .
                                        # # . # #
                                        . # . # .
                                        . # # # .
                                        . . . . .`);
                                        // animals    
            case IconNames.Rabbit: return images.createImage(`
                                        # . # . .
                                        # . # . .
                                        # # # # .
                                        # # . # .
                                        # # # # .`);
            case IconNames.Cow: return images.createImage(`
                                        # . . . #
                                        # . . . #
                                        # # # # #
                                        . # # # .
                                        . . # . .`);
                                        // musical notes
            case IconNames.QuarterNote: return images.createImage(`
                                        . . # . .
                                        . . # . .
                                        . . # . .
                                        # # # . .
                                        # # # . .`);
            case IconNames.EigthNote: return images.createImage(`
                                        . . # . .
                                        . . # # .
                                        . . # . #
                                        # # # . .
                                        # # # . .`);
                                        // other icons
            case IconNames.Pitchfork: return images.createImage(`
                                        # . # . #
                                        # . # . #
                                        # # # # #
                                        . . # . .
                                        . . # . .`);
            case IconNames.Target: return images.createImage(`
                                        . . # . .
                                        . # # # .
                                        # # . # #
                                        . # # # .
                                        . . # . .`);
            default:                return images.createImage(`
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        `);
        }
    }

    //% weight=50 blockGap=8
    //% blockId=device_arrow block="%arrow"
    //% shim=TD_ID
    export function arrowNumber(arrow: ArrowNames): number {
        return arrow;
    }
}
