import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { NotesModel } from '../models/notesModel';

@Injectable({ providedIn: 'root' })
export class NotesLoaderService {

  noteStream: BehaviorSubject<NotesModel[]>;
  notes: NotesModel[] = [];

  constructor() {
    this._uploadNotes<NotesModel>();
    this.noteStream = new BehaviorSubject<NotesModel[]>((this.notes))
  }

  private _uploadNotes<T>(): void {
    let data: any = localStorage.getItem('dataNodes');
    if (JSON.parse(data) as T[]) {
      this.notes = JSON.parse(data);
    } else {
      //IF NULL => set default
      this.notes = [
        {
          id: 1000,
          title: "Тут большой текст",
          updated: new Date(),
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta optio, earum rerum eveniet modi necessitatibus delectus deserunt mollitia ab debitis. Natus, impedit. Obcaecati ad distinctio animi unde perspiciatis. Maxime repellendus eius voluptas laborum amet nobis perspiciatis quis magni. Nam a atque dolor recusandae eaque libero harum minima consequuntur veniam, perferendis tempora soluta ratione, officia, reiciendis excepturi id fugit sit exercitationem iste sint similique ut itaque aut non. Id, saepe enim. Possimus repudiandae necessitatibus, laborum perferendis sunt iure culpa id incidunt libero, porro, mollitia at quis cupiditate ut? Maiores laboriosam nemo similique accusamus consectetur amet unde, nobis debitis odit velit atque aperiam, nesciunt corrupti assumenda natus ipsam eum. Non quisquam accusantium facilis, commodi dolorum doloribus debitis sint consequuntur ducimus reiciendis delectus adipisci cum quibusdam possimus sequi, expedita, ratione maiores nostrum dolor. Ab libero unde neque necessitatibus dicta, delectus officiis iure ut architecto fuga! Aperiam eligendi sit eaque, asperiores assumenda placeat facere cum ipsam? Minus nisi fugiat sint quos odit cupiditate consequuntur harum dolorem sunt, modi nihil numquam similique adipisci? Doloribus saepe dicta provident? Non ipsum ab, aperiam, laboriosam quisquam minima odio in dicta facilis quasi harum ut, magni omnis. Veritatis odio provident molestias, eligendi alias ratione a. Nobis laboriosam nesciunt dicta inventore dolore rem quia officia culpa ratione amet, aliquid, deserunt cumque expedita ea nisi sit iure suscipit excepturi, fugit odit? Odio aliquid sequi voluptatum neque ullam totam repellat dolore quos laborum architecto id corporis quasi, nihil quam quaerat? Omnis eligendi commodi dolorum saepe velit possimus, vero voluptatum nulla autem eaque! Maiores adipisci officiis rerum consequuntur quidem facilis pariatur quia sequi delectus autem, nihil et nulla quam expedita atque, inventore minima omnis. Optio labore porro quos maiores sed, magni harum impedit sunt obcaecati, repudiandae aspernatur corrupti unde? Quibusdam nulla pariatur, ipsa laudantium neque ea, obcaecati quas repudiandae laborum nam maiores amet eligendi ratione? Temporibus vel ad, nisi provident quis deleniti corrupti maiores in nam velit sapiente exercitationem eveniet eum laboriosam fuga harum voluptatum quae doloribus ex impedit? Dolores corrupti sapiente atque, suscipit aperiam veniam illo exercitationem magnam? Nihil blanditiis doloremque culpa cumque, corrupti asperiores doloribus. Numquam consequuntur nam laboriosam, illo quia quae eligendi voluptatum ad possimus excepturi omnis, nobis provident reprehenderit quod, labore aut vitae molestias itaque iusto. Dolore temporibus delectus nostrum rerum impedit modi beatae in minima! Aut iusto et, itaque error ea sequi nisi cumque. Perferendis sapiente, earum ullam, harum, consequuntur dolor omnis aspernatur porro voluptates eveniet provident! Nobis veniam eaque architecto nostrum commodi doloribus assumenda maiores, numquam asperiores, vero natus aut quam similique mollitia velit rerum sequi corporis dolorem delectus neque expedita culpa. Obcaecati, inventore tempora. Exercitationem quo architecto voluptatem dolore vitae ratione optio amet facere minima, rerum eligendi, tempore minus aspernatur reiciendis, praesentium recusandae commodi quos deserunt at quibusdam sunt alias illo labore? Autem voluptatum modi sequi repellat iure magni tenetur quo quae nemo ullam laborum accusamus numquam tempora ex consectetur est, quasi ipsa aliquam odio aliquid neque sit cumque. Autem amet aliquam suscipit, voluptatibus quam consectetur distinctio saepe a fugiat quod doloribus consequatur error fugit similique ut ad aut? Expedita nihil architecto odio asperiores saepe tenetur obcaecati amet dignissimos quos nulla rem similique perferendis ipsa tempora alias vel, maxime veniam. Fugit non ducimus dolores, eveniet vitae aspernatur minus dolore aliquid ratione rerum obcaecati eos temporibus modi suscipit? Sit repellendus corporis dicta quas nemo voluptatem accusamus? Voluptatem repellat iure odit ullam eum dicta nesciunt ipsa natus iusto repudiandae distinctio, officiis, ea incidunt quibusdam. Distinctio debitis ipsa consequatur adipisci, laboriosam quibusdam doloremque esse odio alias, ea optio? Odit impedit sint, perspiciatis rerum suscipit, ducimus odio labore iure sunt deleniti praesentium quae magnam iste autem natus explicabo? Dignissimos repellat adipisci quos qui facilis tempora labore accusantium quae. Distinctio quasi aut ipsum, omnis doloremque, quibusdam accusantium, nobis iste numquam perferendis vitae minus natus iure delectus eum. Perspiciatis consectetur quibusdam quas cupiditate, sequi pariatur, dolorem, optio odit nam maxime molestias vel. Accusantium delectus adipisci ratione saepe culpa dolore esse voluptas ipsum, repellendus illo. Distinctio veritatis quos excepturi debitis maiores incidunt perspiciatis, facilis nemo aliquid sapiente vero ratione id. Rem perspiciatis minima, dolorem excepturi in doloribus explicabo odio quaerat alias voluptatibus ipsum earum dolores, iure ratione officia ducimus hic, nam perferendis. Eligendi inventore atque quasi repellendus exercitationem repudiandae aliquam sapiente, dolorem dolor dolorum. Obcaecati dolore dolores iure illo quos eaque sequi amet dolorum hic tenetur voluptatem eius, ad, nemo nam sed corrupti alias accusamus? Alias earum nisi perspiciatis enim omnis voluptas pariatur, delectus dolore amet ipsam molestias, rem quis nam qui necessitatibus dolorum. Ipsam reprehenderit, nostrum quam reiciendis quibusdam beatae maxime quae dicta ducimus eaque autem expedita tenetur consequuntur. Placeat nesciunt consequatur tenetur vero hic quibusdam ex distinctio quod cum, sed eaque rem accusamus, beatae asperiores consectetur eligendi. Nemo molestias minima neque id quibusdam tempore culpa recusandae aliquam vel harum, a ut numquam, quae incidunt ab temporibus voluptate ipsa explicabo iusto totam ipsum quidem dignissimos obcaecati? Veritatis voluptatibus sequi amet nihil maiores cum vero quasi a recusandae incidunt reprehenderit illo animi, in alias soluta laudantium repudiandae vitae porro! Ex possimus magni, impedit eligendi quod non voluptates, aspernatur facere tenetur iste perferendis modi voluptatibus hic quibusdam. Recusandae delectus quaerat rerum quis est adipisci odio possimus consectetur esse odit voluptatum vitae velit illum assumenda a libero laboriosam eos iure maxime earum magni cupiditate, beatae quia? Cumque, vel? Architecto ratione iste nulla repudiandae, voluptatem placeat eligendi illo cum quo, eius ea, repellat nobis voluptas? Voluptate ab perferendis enim quasi facere qui libero nihil, maxime doloribus ea quae aut quidem vero sunt? Accusamus aspernatur ex, cupiditate, nobis consectetur, quas doloribus nemo impedit reiciendis architecto magnam dolores. Error sunt laborum neque debitis mollitia quaerat odio, quam asperiores, esse, at voluptatum veritatis nihil tempore repudiandae cum eligendi. Laborum quam ipsa non itaque iure quaerat nesciunt sint quidem. Natus, necessitatibus incidunt pariatur vel deleniti omnis vero quasi voluptate laboriosam eius eos a expedita totam quis sit quidem, delectus cum aperiam nostrum officia dignissimos inventore? Eum quibusdam tenetur, pariatur dolor quam porro expedita iure, officiis eos ducimus quod beatae eveniet omnis eaque reiciendis vero illo, nesciunt nam? Consectetur, ducimus."
        },
        {
          id: 100,
          title: "Тут средний текст",
          updated: new Date(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro suscipit magni ipsa perferendis obcaecati natus quas est ad assumenda delectus odit illo aperiam laborum tempora mollitia, veniam dicta maxime explicabo perspiciatis recusandae cupiditate consequatur! Dignissimos, suscipit quidem. Nostrum voluptates eius nihil fugit cumque alias enim ex, porro at sit? Doloremque, dolorem enim. Asperiores quaerat porro aut natus dolore, amet ullam eius suscipit quisquam veniam. Saepe voluptas tempore vel velit fuga reiciendis nostrum qui harum repellendus illo, mollitia placeat expedita dolorum atque est laboriosam recusandae molestias. Odio iusto, a obcaecati quia alias aliquid commodi et aperiam atque? Deserunt, libero sit?"
        },
        {
          id: 10,
          title: "Тут маленький текст",
          updated: new Date(),
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, non."
        }
      ];
    }
  }

  private _saveNodes() {
    localStorage.setItem('dataNodes', JSON.stringify(this.notes));
    this.noteStream.next(this.notes)
  }

  getNodes() {
    return this.noteStream;
  }

  addNode(dataNodes: NotesModel) {
    this.notes = this.notes.concat(dataNodes);
    this._saveNodes();
  }

  deleteNode(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this._saveNodes();
  }

  findNote(id: number) {
    return this.notes.filter(note => note.id == id)[0];
  }

  editNode(updatedNode: NotesModel) {
    this.notes.forEach(note => {
      if(note.id === updatedNode.id) Object.assign(note, updatedNode);
    })
    this._saveNodes();
  }
}
