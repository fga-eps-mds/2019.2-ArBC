import API from '@/services/api';
import { Pattern } from '@/store/models';
import {
  Module,
  Action,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({
  name: 'patterns',
})
export default class PatternsModule extends VuexModule {
  private patterns: {[index: string]: string} = {};

  public get Patterns() {
    return this.patterns;
  }

  @Mutation
  public async setPatterns(patterns: Pattern[]) {
    await patterns.forEach((pattern: Pattern) => {
        this.patterns[pattern.name] = pattern.patt;
      },
    );
  }

  @Action({ rawError: true })
  public async getPatterns() {
    const url = '/Pattern';

    const patterns = await API.get(url);

    await this.setPatterns(patterns);
  }
}

