"use strict";
exports.handler = async (event) => {
    const notesArray = ["maths-notes", "chem-notes", "phy-notes", "eng-notes"];
    switch (event.info.fieldName) {
        case "notes":
            return notesArray;
        case "customNote":
            return event.arguments.title;
        default:
            return null;
    }
};
// type AppSyncEvent = {
//     info: {
//         fieldName: string
//     }
//     arguments: {
//         title: string
//     }
// }
// exports.handler = async (event: AppSyncEvent) => {
//     const notesArray = ["note1", "note2", "note3"]
//     switch (event.info.fieldName) {
//         case "notes":
//             return notesArray;
//         case "customNote":
//             return event.arguments.title;
//         default:
//             return null;
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBV0EsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBbUIsRUFBRSxFQUFFO0lBRTVDLE1BQU0sVUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFFMUUsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMxQixLQUFLLE9BQU87WUFDUixPQUFPLFVBQVUsQ0FBQTtRQUNyQixLQUFLLFlBQVk7WUFDYixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBO1FBQ2hDO1lBQ0ksT0FBTyxJQUFJLENBQUE7S0FDbEI7QUFFTCxDQUFDLENBQUE7QUFFRCx3QkFBd0I7QUFDeEIsY0FBYztBQUNkLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsSUFBSTtBQUdKLHFEQUFxRDtBQUVyRCxxREFBcUQ7QUFFckQsc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4QixpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXG50eXBlIEFwcFN5bmNFdmVudCA9IHtcbiAgICBpbmZvOiB7XG4gICAgICAgIGZpZWxkTmFtZTogc3RyaW5nXG4gICAgfSxcbiAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZ1xuICAgIH1cbn1cblxuXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IEFwcFN5bmNFdmVudCkgPT4ge1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IFtcIm1hdGhzLW5vdGVzXCIsIFwiY2hlbS1ub3Rlc1wiLCBcInBoeS1ub3Rlc1wiLCBcImVuZy1ub3Rlc1wiXVxuXG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xuICAgICAgICBjYXNlIFwibm90ZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBub3Rlc0FycmF5XG4gICAgICAgIGNhc2UgXCJjdXN0b21Ob3RlXCI6XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuYXJndW1lbnRzLnRpdGxlXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxufVxuXG4vLyB0eXBlIEFwcFN5bmNFdmVudCA9IHtcbi8vICAgICBpbmZvOiB7XG4vLyAgICAgICAgIGZpZWxkTmFtZTogc3RyaW5nXG4vLyAgICAgfVxuLy8gICAgIGFyZ3VtZW50czoge1xuLy8gICAgICAgICB0aXRsZTogc3RyaW5nXG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudDogQXBwU3luY0V2ZW50KSA9PiB7XG5cbi8vICAgICBjb25zdCBub3Rlc0FycmF5ID0gW1wibm90ZTFcIiwgXCJub3RlMlwiLCBcIm5vdGUzXCJdXG5cbi8vICAgICBzd2l0Y2ggKGV2ZW50LmluZm8uZmllbGROYW1lKSB7XG4vLyAgICAgICAgIGNhc2UgXCJub3Rlc1wiOlxuLy8gICAgICAgICAgICAgcmV0dXJuIG5vdGVzQXJyYXk7XG4vLyAgICAgICAgIGNhc2UgXCJjdXN0b21Ob3RlXCI6XG4vLyAgICAgICAgICAgICByZXR1cm4gZXZlbnQuYXJndW1lbnRzLnRpdGxlO1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuLy8gfSJdfQ==