import { Routes } from "@angular/router";
import { GameChordsComponent } from "../game-chords/game-chords.component";
import { GameNotesComponent } from "../game-notes/game-notes.component";
import { GameScalesComponent } from "../game-scales/game-scales.component";
import { LobbyComponent } from "../lobby/lobby.component";
import { RoomLayoutComponent } from "../room/room-layout/room-layout.component";

export const ROUTES: Routes = [
    { path: "lobby", component: LobbyComponent },
    { path: "room", component: RoomLayoutComponent },
    { path: "game-notes", component: GameNotesComponent },
    { path: "game-chords", component: GameChordsComponent },
    { path: "game-scales", component: GameScalesComponent },
    { path: "**", component: LobbyComponent },
];