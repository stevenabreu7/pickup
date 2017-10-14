import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

import { FeedPage } from '../feed/feed';

import { AchievementsPage } from '../achievements/achievements'

import { GamesPage } from '../games/games'

import { CreatePage } from '../create/create'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = FeedPage;
  tab3Root = CreatePage;
  tab4Root = AchievementsPage; 
  tab5Root = GamesPage; 

  constructor() {

  }
}
