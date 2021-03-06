"use strict";
// type AppSyncEvent = {
//     info: {
//         fieldName: string
//     },
//     arguments: {
//         title: string
//     }
// }
exports.handler = async (event) => {
    const notesArray = ["note1", "note2", "note3"];
    switch (event.info.fieldName) {
        case "notes":
            return notesArray;
        case "customNote":
            return event.arguments.title;
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0JBQXdCO0FBQ3hCLGNBQWM7QUFDZCw0QkFBNEI7QUFDNUIsU0FBUztBQUNULG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLElBQUk7QUE0QkosT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBbUIsRUFBRSxFQUFFO0lBRTVDLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUU5QyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLEtBQUssT0FBTztZQUNSLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLEtBQUssWUFBWTtZQUNiLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDakM7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gdHlwZSBBcHBTeW5jRXZlbnQgPSB7XG4vLyAgICAgaW5mbzoge1xuLy8gICAgICAgICBmaWVsZE5hbWU6IHN0cmluZ1xuLy8gICAgIH0sXG4vLyAgICAgYXJndW1lbnRzOiB7XG4vLyAgICAgICAgIHRpdGxlOiBzdHJpbmdcbi8vICAgICB9XG4vLyB9XG5cblxuLy8gZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBcHBTeW5jRXZlbnQpID0+IHtcblxuLy8gICAgIGNvbnN0IG5vdGVzQXJyYXkgPSBbXCJtYXRocy1ub3Rlc1wiLCBcImNoZW0tbm90ZXNcIiwgXCJwaHktbm90ZXNcIiwgXCJlbmctbm90ZXNcIl1cblxuLy8gICAgIHN3aXRjaCAoZXZlbnQuaW5mby5maWVsZE5hbWUpIHtcbi8vICAgICAgICAgY2FzZSBcIm5vdGVzXCI6XG4vLyAgICAgICAgICAgICByZXR1cm4gbm90ZXNBcnJheVxuLy8gICAgICAgICBjYXNlIFwiY3VzdG9tTm90ZVwiOlxuLy8gICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmFyZ3VtZW50cy50aXRsZVxuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIG51bGxcbi8vICAgICB9XG5cbi8vIH1cblxudHlwZSBBcHBTeW5jRXZlbnQgPSB7XG4gICAgaW5mbzoge1xuICAgICAgICBmaWVsZE5hbWU6IHN0cmluZ1xuICAgIH1cbiAgICBhcmd1bWVudHM6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZ1xuICAgIH1cbn1cblxuXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IEFwcFN5bmNFdmVudCkgPT4ge1xuXG4gICAgY29uc3Qgbm90ZXNBcnJheSA9IFtcIm5vdGUxXCIsIFwibm90ZTJcIiwgXCJub3RlM1wiXVxuXG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xuICAgICAgICBjYXNlIFwibm90ZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBub3Rlc0FycmF5O1xuICAgICAgICBjYXNlIFwiY3VzdG9tTm90ZVwiOlxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmFyZ3VtZW50cy50aXRsZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=