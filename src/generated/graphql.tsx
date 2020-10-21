import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  JSONObject: any;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches lists of comic characters with optional filters. See notes on individual parameters below. */
  characters: CharacterDataWrapper;
  /** Fetches lists of characters which appear in a specific comic with optional filters. See notes on individual parameters below. */
  characters_filtered_by_a_comic_id: CharacterDataWrapper;
  /** Fetches lists of characters which appear in specific series, with optional filters. See notes on individual parameters below. */
  characters_filtered_by_a_series_id: CharacterDataWrapper;
  /** Fetches lists of comic characters appearing in a single story, with optional filters. See notes on individual parameters below. */
  characters_filtered_by_a_story_id: CharacterDataWrapper;
  /** Fetches lists of characters which appear in a specific event, with optional filters. See notes on individual parameters below. */
  characters_filtered_by_an_event_id: CharacterDataWrapper;
  /** Fetches lists of comics with optional filters. See notes on individual parameters below. */
  comics: ComicDataWrapper;
  /** Fetches lists of comics containing a specific character, with optional filters. See notes on individual parameters below. */
  comics_filtered_by_a_character_id: ComicDataWrapper;
  /** Fetches lists of comics in which the work of a specific creator appears, with optional filters. See notes on individual parameters below. */
  comics_filtered_by_a_creator_id: ComicDataWrapper;
  /** Fetches lists of comics which are published as part of a specific series, with optional filters. See notes on individual parameters below. */
  comics_filtered_by_a_series_id: ComicDataWrapper;
  /** Fetches lists of comics in which a specific story appears, with optional filters. See notes on individual parameters below. */
  comics_filtered_by_a_story_id: ComicDataWrapper;
  /** Fetches lists of comics which take place during a specific event, with optional filters. See notes on individual parameters below. */
  comics_filtered_by_an_event_id: ComicDataWrapper;
  /** Fetches lists of comic creators with optional filters. See notes on individual parameters below. */
  creators: CreatorDataWrapper;
  /** Fetches lists of comic creators whose work appears in a specific comic, with optional filters. See notes on individual parameters below. */
  creators_filtered_by_a_comic_id: CreatorDataWrapper;
  /** Fetches lists of comic creators whose work appears in a specific series, with optional filters. See notes on individual parameters below. */
  creators_filtered_by_a_series_id: CreatorDataWrapper;
  /** Fetches lists of comic creators whose work appears in a specific story, with optional filters. See notes on individual parameters below. */
  creators_filtered_by_a_story_id: CreatorDataWrapper;
  /** Fetches lists of comic creators whose work appears in a specific event, with optional filters. See notes on individual parameters below. */
  creators_filtered_by_an_event_id: CreatorDataWrapper;
  debug?: Maybe<Scalars['JSON']>;
  /** Fetches lists of events with optional filters. See notes on individual parameters below. */
  events: EventDataWrapper;
  /** Fetches lists of events in which a specific character appears, with optional filters. See notes on individual parameters below. */
  events_filtered_by_a_character_id: EventDataWrapper;
  /** Fetches lists of events in which a specific comic appears, with optional filters. See notes on individual parameters below. */
  events_filtered_by_a_comic_id: EventDataWrapper;
  /** Fetches lists of events featuring the work of a specific creator with optional filters. See notes on individual parameters below. */
  events_filtered_by_a_creator_id: EventDataWrapper;
  /** Fetches lists of events which occur in a specific series, with optional filters. See notes on individual parameters below. */
  events_filtered_by_a_series_id: EventDataWrapper;
  /** Fetches lists of events in which a specific story appears, with optional filters. See notes on individual parameters below. */
  events_filtered_by_a_story_id: EventDataWrapper;
  list?: Maybe<ListWrapper>;
  /** Fetches lists of comic series with optional filters. See notes on individual parameters below. */
  series: SeriesDataWrapper;
  /** Fetches lists of comic series in which a specific character appears, with optional filters. See notes on individual parameters below. */
  series_filtered_by_a_character_id: SeriesDataWrapper;
  /** Fetches lists of comic series in which a specific creator's work appears, with optional filters. See notes on individual parameters below. */
  series_filtered_by_a_creator_id: SeriesDataWrapper;
  /** Fetches lists of comic series in which the specified story takes place. See notes on individual parameters below. */
  series_filtered_by_a_story_id: SeriesDataWrapper;
  /** Fetches lists of comic series in which a specific event takes place, with optional filters. See notes on individual parameters below. */
  series_filtered_by_an_event_id: SeriesDataWrapper;
  /** This method fetches a single character resource.  It is the canonical URI for any character resource provided by the API. */
  single_character_by_id: CharacterDataWrapper;
  /** This method fetches a single comic resource.  It is the canonical URI for any comic resource provided by the API. */
  single_comic_by_id: ComicDataWrapper;
  /** This method fetches a single comic series resource.  It is the canonical URI for any comic series resource provided by the API. */
  single_comic_series_by_id: SeriesDataWrapper;
  /** This method fetches a single comic story resource.  It is the canonical URI for any comic story resource provided by the API. */
  single_comic_story_by_id: StoryDataWrapper;
  /** This method fetches a single creator resource.  It is the canonical URI for any creator resource provided by the API. */
  single_creator_by_id: CreatorDataWrapper;
  /** This method fetches a single event resource.  It is the canonical URI for any event resource provided by the API. */
  single_event_by_id: EventDataWrapper;
  /** Fetches lists of comic stories with optional filters. See notes on individual parameters below. */
  stories: StoryDataWrapper;
  /** Fetches lists of comic stories  featuring a specific character with optional filters. See notes on individual parameters below. */
  stories_filtered_by_a_character_id: StoryDataWrapper;
  /** Fetches lists of comic stories in a specific comic issue, with optional filters. See notes on individual parameters below. */
  stories_filtered_by_a_comic_id: StoryDataWrapper;
  /** Fetches lists of comic stories by a specific creator with optional filters. See notes on individual parameters below. */
  stories_filtered_by_a_creator_id: StoryDataWrapper;
  /** Fetches lists of comic stories from a specific series with optional filters. See notes on individual parameters below. */
  stories_filtered_by_a_series_id: StoryDataWrapper;
  /** Fetches lists of comic stories from a specific event, with optional filters. See notes on individual parameters below. */
  stories_filtered_by_an_event_id: StoryDataWrapper;
};

export type QueryCharactersArgs = {
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCharacters_Filtered_By_A_Comic_IdArgs = {
  comicId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCharacters_Filtered_By_A_Series_IdArgs = {
  seriesId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCharacters_Filtered_By_A_Story_IdArgs = {
  storyId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCharacters_Filtered_By_An_Event_IdArgs = {
  eventId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComicsArgs = {
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Scalars['Boolean']>;
  dateDescriptor?: Maybe<Scalars['String']>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Scalars['Boolean']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComics_Filtered_By_A_Character_IdArgs = {
  characterId: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Scalars['Boolean']>;
  dateDescriptor?: Maybe<Scalars['String']>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Scalars['Boolean']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComics_Filtered_By_A_Creator_IdArgs = {
  creatorId: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Scalars['Boolean']>;
  dateDescriptor?: Maybe<Scalars['String']>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Array<Scalars['Boolean']>>;
  modifiedSince?: Maybe<Scalars['String']>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComics_Filtered_By_A_Series_IdArgs = {
  seriesId: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Array<Scalars['Boolean']>>;
  dateDescriptor?: Maybe<Array<Scalars['String']>>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Array<Scalars['Boolean']>>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComics_Filtered_By_A_Story_IdArgs = {
  storyId: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Array<Scalars['Boolean']>>;
  dateDescriptor?: Maybe<Array<Scalars['String']>>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Array<Scalars['Boolean']>>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryComics_Filtered_By_An_Event_IdArgs = {
  eventId: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  formatType?: Maybe<Scalars['String']>;
  noVariants?: Maybe<Array<Scalars['Boolean']>>;
  dateDescriptor?: Maybe<Array<Scalars['String']>>;
  dateRange?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  issueNumber?: Maybe<Scalars['Int']>;
  diamondCode?: Maybe<Scalars['String']>;
  digitalId?: Maybe<Scalars['Int']>;
  upc?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  ean?: Maybe<Scalars['String']>;
  issn?: Maybe<Scalars['String']>;
  hasDigitalIssue?: Maybe<Array<Scalars['Boolean']>>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  sharedAppearances?: Maybe<Array<Scalars['Int']>>;
  collaborators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCreatorsArgs = {
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  firstNameStartsWith?: Maybe<Scalars['String']>;
  middleNameStartsWith?: Maybe<Scalars['String']>;
  lastNameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCreators_Filtered_By_A_Comic_IdArgs = {
  comicId: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  firstNameStartsWith?: Maybe<Scalars['String']>;
  middleNameStartsWith?: Maybe<Scalars['String']>;
  lastNameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCreators_Filtered_By_A_Series_IdArgs = {
  seriesId: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  firstNameStartsWith?: Maybe<Scalars['String']>;
  middleNameStartsWith?: Maybe<Scalars['String']>;
  lastNameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCreators_Filtered_By_A_Story_IdArgs = {
  storyId: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  firstNameStartsWith?: Maybe<Scalars['String']>;
  middleNameStartsWith?: Maybe<Scalars['String']>;
  lastNameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryCreators_Filtered_By_An_Event_IdArgs = {
  eventId: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  firstNameStartsWith?: Maybe<Scalars['String']>;
  middleNameStartsWith?: Maybe<Scalars['String']>;
  lastNameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryDebugArgs = {
  arg1?: Maybe<Scalars['String']>;
};

export type QueryEventsArgs = {
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEvents_Filtered_By_A_Character_IdArgs = {
  characterId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEvents_Filtered_By_A_Comic_IdArgs = {
  comicId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEvents_Filtered_By_A_Creator_IdArgs = {
  creatorId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEvents_Filtered_By_A_Series_IdArgs = {
  seriesId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryEvents_Filtered_By_A_Story_IdArgs = {
  storyId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nameStartsWith?: Maybe<Scalars['String']>;
  modifiedSince?: Maybe<Scalars['String']>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  comics?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryListArgs = {
  marvelEntity: MarvelEntity;
  filters?: Maybe<Scalars['JSONObject']>;
};

export type QuerySeriesArgs = {
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  seriesType?: Maybe<Scalars['String']>;
  contains?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuerySeries_Filtered_By_A_Character_IdArgs = {
  characterId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  seriesType?: Maybe<Scalars['String']>;
  contains?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuerySeries_Filtered_By_A_Creator_IdArgs = {
  creatorId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  seriesType?: Maybe<Scalars['String']>;
  contains?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuerySeries_Filtered_By_A_Story_IdArgs = {
  storyId: Scalars['Int'];
  events?: Maybe<Array<Scalars['Int']>>;
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  seriesType?: Maybe<Scalars['String']>;
  contains?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuerySeries_Filtered_By_An_Event_IdArgs = {
  eventId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  titleStartsWith?: Maybe<Scalars['String']>;
  startYear?: Maybe<Scalars['Int']>;
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  stories?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  seriesType?: Maybe<Scalars['String']>;
  contains?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QuerySingle_Character_By_IdArgs = {
  characterId: Scalars['Int'];
};

export type QuerySingle_Comic_By_IdArgs = {
  comicId: Scalars['Int'];
};

export type QuerySingle_Comic_Series_By_IdArgs = {
  seriesId: Scalars['Int'];
};

export type QuerySingle_Comic_Story_By_IdArgs = {
  storyId: Scalars['Int'];
};

export type QuerySingle_Creator_By_IdArgs = {
  creatorId: Scalars['Int'];
};

export type QuerySingle_Event_By_IdArgs = {
  eventId: Scalars['Int'];
};

export type QueryStoriesArgs = {
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryStories_Filtered_By_A_Character_IdArgs = {
  characterId: Scalars['Int'];
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryStories_Filtered_By_A_Comic_IdArgs = {
  comicId: Scalars['Int'];
  modifiedSince?: Maybe<Scalars['String']>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryStories_Filtered_By_A_Creator_IdArgs = {
  creatorId: Scalars['Int'];
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryStories_Filtered_By_A_Series_IdArgs = {
  seriesId: Scalars['Int'];
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  events?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type QueryStories_Filtered_By_An_Event_IdArgs = {
  eventId: Scalars['Int'];
  modifiedSince?: Maybe<Scalars['String']>;
  comics?: Maybe<Array<Scalars['Int']>>;
  series?: Maybe<Array<Scalars['Int']>>;
  creators?: Maybe<Array<Scalars['Int']>>;
  characters?: Maybe<Array<Scalars['Int']>>;
  orderBy?: Maybe<Array<Scalars['String']>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CharacterDataWrapper = {
  __typename?: 'CharacterDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<CharacterDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type CharacterDataWrapper_Data = {
  __typename?: 'CharacterDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of characters returned by the call. */
  results?: Maybe<Array<Character>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Character = {
  __typename?: 'Character';
  /** A resource list containing comics which feature this character. */
  comics?: Maybe<Character_Comics>;
  /** A short bio or description of the character. */
  description?: Maybe<Scalars['String']>;
  /** A resource list of events in which this character appears. */
  events?: Maybe<Character_Events>;
  /** The unique ID of the character resource. */
  id?: Maybe<Scalars['Int']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The canonical URL identifier for this resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** A resource list of series in which this character appears. */
  series?: Maybe<Character_Series>;
  /** A resource list of stories in which this character appears. */
  stories?: Maybe<Character_Stories>;
  /** The representative image for this character. */
  thumbnail?: Maybe<Character_Thumbnail>;
  /** A set of public web site URLs for the resource. */
  urls?: Maybe<Array<Url>>;
};

/** A resource list containing comics which feature this character. */
export type Character_Comics = {
  __typename?: 'Character_comics';
  /** The number of total available issues in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of issues in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned issues in this collection. */
  items?: Maybe<Array<ComicSummary>>;
  /** The number of issues returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type ComicSummary = {
  __typename?: 'ComicSummary';
  /** The canonical name of the comic. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual comic resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list of events in which this character appears. */
export type Character_Events = {
  __typename?: 'Character_events';
  /** The number of total available events in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of events in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned events in this collection. */
  items?: Maybe<Array<EventSummary>>;
  /** The number of events returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type EventSummary = {
  __typename?: 'EventSummary';
  /** The name of the event. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual event resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list of series in which this character appears. */
export type Character_Series = {
  __typename?: 'Character_series';
  /** The number of total available series in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of series in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned series in this collection. */
  items?: Maybe<Array<SeriesSummary>>;
  /** The number of series returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type SeriesSummary = {
  __typename?: 'SeriesSummary';
  /** The canonical name of the series. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual series resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list of stories in which this character appears. */
export type Character_Stories = {
  __typename?: 'Character_stories';
  /** The number of total available stories in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of stories in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned stories in this collection. */
  items?: Maybe<Array<StorySummary>>;
  /** The number of stories returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type StorySummary = {
  __typename?: 'StorySummary';
  /** The canonical name of the story. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual story resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** The type of the story (interior or cover). */
  type?: Maybe<Scalars['String']>;
};

/** The representative image for this character. */
export type Character_Thumbnail = {
  __typename?: 'Character_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type Url = {
  __typename?: 'Url';
  /** A text identifier for the URL. */
  type?: Maybe<Scalars['String']>;
  /** A full URL (including scheme, domain, and path). */
  url?: Maybe<Scalars['String']>;
};

export type ComicDataWrapper = {
  __typename?: 'ComicDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<ComicDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type ComicDataWrapper_Data = {
  __typename?: 'ComicDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of comics returned by the call */
  results?: Maybe<Array<Comic>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Comic = {
  __typename?: 'Comic';
  /** A resource list containing the characters which appear in this comic. */
  characters?: Maybe<Comic_Characters>;
  /** A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine"). */
  collectedIssues?: Maybe<Array<ComicSummary>>;
  /** A list of collections which include this comic (will generally be empty if the comic's format is a collection). */
  collections?: Maybe<Array<ComicSummary>>;
  /** A resource list containing the creators associated with this comic. */
  creators?: Maybe<Comic_Creators>;
  /** A list of key dates for this comic. */
  dates?: Maybe<Array<ComicDate>>;
  /** The preferred description of the comic. */
  description?: Maybe<Scalars['String']>;
  /** The Diamond code for the comic. */
  diamondCode?: Maybe<Scalars['String']>;
  /** The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally. */
  digitalId?: Maybe<Scalars['Int']>;
  /** The EAN barcode for the comic. */
  ean?: Maybe<Scalars['String']>;
  /** A resource list containing the events in which this comic appears. */
  events?: Maybe<Comic_Events>;
  /** The publication format of the comic e.g. comic, hardcover, trade paperback. */
  format?: Maybe<Scalars['String']>;
  /** The unique ID of the comic resource. */
  id?: Maybe<Scalars['Int']>;
  /** A list of promotional images associated with this comic. */
  images?: Maybe<Array<Image>>;
  /** The ISBN for the comic (generally only populated for collection formats). */
  isbn?: Maybe<Scalars['String']>;
  /** The ISSN barcode for the comic. */
  issn?: Maybe<Scalars['String']>;
  /** The number of the issue in the series (will generally be 0 for collection formats). */
  issueNumber?: Maybe<Scalars['Float']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** The number of story pages in the comic. */
  pageCount?: Maybe<Scalars['Int']>;
  /** A list of prices for this comic. */
  prices?: Maybe<Array<ComicPrice>>;
  /** The canonical URL identifier for this resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** A summary representation of the series to which this comic belongs. */
  series?: Maybe<Comic_Series>;
  /** A resource list containing the stories which appear in this comic. */
  stories?: Maybe<Comic_Stories>;
  /** A set of descriptive text blurbs for the comic. */
  textObjects?: Maybe<Array<TextObject>>;
  /** The representative image for this comic. */
  thumbnail?: Maybe<Comic_Thumbnail>;
  /** The canonical title of the comic. */
  title?: Maybe<Scalars['String']>;
  /** The UPC barcode number for the comic (generally only populated for periodical formats). */
  upc?: Maybe<Scalars['String']>;
  /** A set of public web site URLs for the resource. */
  urls?: Maybe<Array<Url>>;
  /** If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant. */
  variantDescription?: Maybe<Scalars['String']>;
  /** A list of variant issues for this comic (includes the "original" issue if the current issue is a variant). */
  variants?: Maybe<Array<ComicSummary>>;
};

/** A resource list containing the characters which appear in this comic. */
export type Comic_Characters = {
  __typename?: 'Comic_characters';
  /** The number of total available characters in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of characters in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned characters in this collection. */
  items?: Maybe<Array<CharacterSummary>>;
  /** The number of characters returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type CharacterSummary = {
  __typename?: 'CharacterSummary';
  /** The full name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual character resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** The role of the creator in the parent entity. */
  role?: Maybe<Scalars['String']>;
};

/** A resource list containing the creators associated with this comic. */
export type Comic_Creators = {
  __typename?: 'Comic_creators';
  /** The number of total available creators in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of creators in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned creators in this collection. */
  items?: Maybe<Array<CreatorSummary>>;
  /** The number of creators returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type CreatorSummary = {
  __typename?: 'CreatorSummary';
  /** The full name of the creator. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual creator resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** The role of the creator in the parent entity. */
  role?: Maybe<Scalars['String']>;
};

export type ComicDate = {
  __typename?: 'ComicDate';
  /** The date. */
  date?: Maybe<Scalars['String']>;
  /** A description of the date (e.g. onsale date, FOC date). */
  type?: Maybe<Scalars['String']>;
};

/** A resource list containing the events in which this comic appears. */
export type Comic_Events = {
  __typename?: 'Comic_events';
  /** The number of total available events in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of events in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned events in this collection. */
  items?: Maybe<Array<EventSummary>>;
  /** The number of events returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type ComicPrice = {
  __typename?: 'ComicPrice';
  /** The price (all prices in USD). */
  price?: Maybe<Scalars['Float']>;
  /** A description of the price (e.g. print price, digital price). */
  type?: Maybe<Scalars['String']>;
};

/** A summary representation of the series to which this comic belongs. */
export type Comic_Series = {
  __typename?: 'Comic_series';
  /** The canonical name of the series. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual series resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list containing the stories which appear in this comic. */
export type Comic_Stories = {
  __typename?: 'Comic_stories';
  /** The number of total available stories in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of stories in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned stories in this collection. */
  items?: Maybe<Array<StorySummary>>;
  /** The number of stories returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

export type TextObject = {
  __typename?: 'TextObject';
  /** The IETF language tag denoting the language the text object is written in. */
  language?: Maybe<Scalars['String']>;
  /** The text. */
  text?: Maybe<Scalars['String']>;
  /** The canonical type of the text object (e.g. solicit text, preview text, etc.). */
  type?: Maybe<Scalars['String']>;
};

/** The representative image for this comic. */
export type Comic_Thumbnail = {
  __typename?: 'Comic_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type EventDataWrapper = {
  __typename?: 'EventDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<EventDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type EventDataWrapper_Data = {
  __typename?: 'EventDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of events returned by the call */
  results?: Maybe<Array<Event>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Event = {
  __typename?: 'Event';
  /** A resource list containing the characters which appear in this event. */
  characters?: Maybe<Event_Characters>;
  /** A resource list containing the comics in this event. */
  comics?: Maybe<Event_Comics>;
  /** A resource list containing creators whose work appears in this event. */
  creators?: Maybe<Event_Creators>;
  /** A description of the event. */
  description?: Maybe<Scalars['String']>;
  /** The date of publication of the last issue in this event. */
  end?: Maybe<Scalars['String']>;
  /** The unique ID of the event resource. */
  id?: Maybe<Scalars['Int']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** A summary representation of the event which follows this event. */
  next?: Maybe<Event_Next>;
  /** A summary representation of the event which preceded this event. */
  previous?: Maybe<Event_Previous>;
  /** The canonical URL identifier for this resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** A resource list containing the series in this event. */
  series?: Maybe<Event_Series>;
  /** The date of publication of the first issue in this event. */
  start?: Maybe<Scalars['String']>;
  /** A resource list containing the stories in this event. */
  stories?: Maybe<Event_Stories>;
  /** The representative image for this event. */
  thumbnail?: Maybe<Event_Thumbnail>;
  /** The title of the event. */
  title?: Maybe<Scalars['String']>;
  /** A set of public web site URLs for the event. */
  urls?: Maybe<Array<Url>>;
};

/** A resource list containing the characters which appear in this event. */
export type Event_Characters = {
  __typename?: 'Event_characters';
  /** The number of total available characters in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of characters in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned characters in this collection. */
  items?: Maybe<Array<CharacterSummary>>;
  /** The number of characters returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing the comics in this event. */
export type Event_Comics = {
  __typename?: 'Event_comics';
  /** The number of total available issues in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of issues in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned issues in this collection. */
  items?: Maybe<Array<ComicSummary>>;
  /** The number of issues returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing creators whose work appears in this event. */
export type Event_Creators = {
  __typename?: 'Event_creators';
  /** The number of total available creators in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of creators in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned creators in this collection. */
  items?: Maybe<Array<CreatorSummary>>;
  /** The number of creators returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A summary representation of the event which follows this event. */
export type Event_Next = {
  __typename?: 'Event_next';
  /** The name of the event. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual event resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A summary representation of the event which preceded this event. */
export type Event_Previous = {
  __typename?: 'Event_previous';
  /** The name of the event. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual event resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list containing the series in this event. */
export type Event_Series = {
  __typename?: 'Event_series';
  /** The number of total available series in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of series in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned series in this collection. */
  items?: Maybe<Array<SeriesSummary>>;
  /** The number of series returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing the stories in this event. */
export type Event_Stories = {
  __typename?: 'Event_stories';
  /** The number of total available stories in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of stories in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned stories in this collection. */
  items?: Maybe<Array<StorySummary>>;
  /** The number of stories returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** The representative image for this event. */
export type Event_Thumbnail = {
  __typename?: 'Event_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type SeriesDataWrapper = {
  __typename?: 'SeriesDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<SeriesDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type SeriesDataWrapper_Data = {
  __typename?: 'SeriesDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of series returned by the call */
  results?: Maybe<Array<Series>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Series = {
  __typename?: 'Series';
  /** A resource list containing characters which appear in comics in this series. */
  characters?: Maybe<Series_Characters>;
  /** A resource list containing comics in this series. */
  comics?: Maybe<Series_Comics>;
  /** A resource list of creators whose work appears in comics in this series. */
  creators?: Maybe<Series_Creators>;
  /** A description of the series. */
  description?: Maybe<Scalars['String']>;
  /** The last year of publication for the series (conventionally, 2099 for ongoing series) . */
  endYear?: Maybe<Scalars['Int']>;
  /** A resource list containing events which take place in comics in this series. */
  events?: Maybe<Series_Events>;
  /** The unique ID of the series resource. */
  id?: Maybe<Scalars['Int']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** A summary representation of the series which follows this series. */
  next?: Maybe<Series_Next>;
  /** A summary representation of the series which preceded this series. */
  previous?: Maybe<Series_Previous>;
  /** The age-appropriateness rating for the series. */
  rating?: Maybe<Scalars['String']>;
  /** The canonical URL identifier for this resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** The first year of publication for the series. */
  startYear?: Maybe<Scalars['Int']>;
  /** A resource list containing stories which occur in comics in this series. */
  stories?: Maybe<Series_Stories>;
  /** The representative image for this series. */
  thumbnail?: Maybe<Series_Thumbnail>;
  /** The canonical title of the series. */
  title?: Maybe<Scalars['String']>;
  /** A set of public web site URLs for the resource. */
  urls?: Maybe<Array<Url>>;
};

/** A resource list containing characters which appear in comics in this series. */
export type Series_Characters = {
  __typename?: 'Series_characters';
  /** The number of total available characters in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of characters in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned characters in this collection. */
  items?: Maybe<Array<CharacterSummary>>;
  /** The number of characters returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing comics in this series. */
export type Series_Comics = {
  __typename?: 'Series_comics';
  /** The number of total available issues in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of issues in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned issues in this collection. */
  items?: Maybe<Array<ComicSummary>>;
  /** The number of issues returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list of creators whose work appears in comics in this series. */
export type Series_Creators = {
  __typename?: 'Series_creators';
  /** The number of total available creators in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of creators in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned creators in this collection. */
  items?: Maybe<Array<CreatorSummary>>;
  /** The number of creators returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing events which take place in comics in this series. */
export type Series_Events = {
  __typename?: 'Series_events';
  /** The number of total available events in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of events in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned events in this collection. */
  items?: Maybe<Array<EventSummary>>;
  /** The number of events returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A summary representation of the series which follows this series. */
export type Series_Next = {
  __typename?: 'Series_next';
  /** The canonical name of the series. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual series resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A summary representation of the series which preceded this series. */
export type Series_Previous = {
  __typename?: 'Series_previous';
  /** The canonical name of the series. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual series resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list containing stories which occur in comics in this series. */
export type Series_Stories = {
  __typename?: 'Series_stories';
  /** The number of total available stories in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of stories in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned stories in this collection. */
  items?: Maybe<Array<StorySummary>>;
  /** The number of stories returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** The representative image for this series. */
export type Series_Thumbnail = {
  __typename?: 'Series_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type StoryDataWrapper = {
  __typename?: 'StoryDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<StoryDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type StoryDataWrapper_Data = {
  __typename?: 'StoryDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of stories returned by the call */
  results?: Maybe<Array<Story>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Story = {
  __typename?: 'Story';
  /** A resource list of characters which appear in this story. */
  characters?: Maybe<Story_Characters>;
  /** A resource list containing comics in which this story takes place. */
  comics?: Maybe<Story_Comics>;
  /** A resource list of creators who worked on this story. */
  creators?: Maybe<Story_Creators>;
  /** A short description of the story. */
  description?: Maybe<Scalars['String']>;
  /** A resource list of the events in which this story appears. */
  events?: Maybe<Story_Events>;
  /** The unique ID of the story resource. */
  id?: Maybe<Scalars['Int']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** A summary representation of the issue in which this story was originally published. */
  originalissue?: Maybe<Story_Originalissue>;
  /** The canonical URL identifier for this resource.  */
  resourceURI?: Maybe<Scalars['String']>;
  /** A resource list containing series in which this story appears. */
  series?: Maybe<Story_Series>;
  /** The representative image for this story. */
  thumbnail?: Maybe<Story_Thumbnail>;
  /** The story title. */
  title?: Maybe<Scalars['String']>;
  /** The story type e.g. interior story, cover, text story. */
  type?: Maybe<Scalars['String']>;
};

/** A resource list of characters which appear in this story. */
export type Story_Characters = {
  __typename?: 'Story_characters';
  /** The number of total available characters in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of characters in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned characters in this collection. */
  items?: Maybe<Array<CharacterSummary>>;
  /** The number of characters returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing comics in which this story takes place. */
export type Story_Comics = {
  __typename?: 'Story_comics';
  /** The number of total available issues in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of issues in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned issues in this collection. */
  items?: Maybe<Array<ComicSummary>>;
  /** The number of issues returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list of creators who worked on this story. */
export type Story_Creators = {
  __typename?: 'Story_creators';
  /** The number of total available creators in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of creators in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned creators in this collection. */
  items?: Maybe<Array<CreatorSummary>>;
  /** The number of creators returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list of the events in which this story appears. */
export type Story_Events = {
  __typename?: 'Story_events';
  /** The number of total available events in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of events in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned events in this collection. */
  items?: Maybe<Array<EventSummary>>;
  /** The number of events returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A summary representation of the issue in which this story was originally published. */
export type Story_Originalissue = {
  __typename?: 'Story_originalissue';
  /** The canonical name of the comic. */
  name?: Maybe<Scalars['String']>;
  /** The path to the individual comic resource. */
  resourceURI?: Maybe<Scalars['String']>;
};

/** A resource list containing series in which this story appears. */
export type Story_Series = {
  __typename?: 'Story_series';
  /** The number of total available series in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of series in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned series in this collection. */
  items?: Maybe<Array<SeriesSummary>>;
  /** The number of series returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** The representative image for this story. */
export type Story_Thumbnail = {
  __typename?: 'Story_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export type CreatorDataWrapper = {
  __typename?: 'CreatorDataWrapper';
  /** An HTML representation of the attribution notice for this result.  Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API. */
  attributionHTML?: Maybe<Scalars['String']>;
  /** The attribution notice for this result.  Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API. */
  attributionText?: Maybe<Scalars['String']>;
  /** The HTTP status code of the returned result. */
  code?: Maybe<Scalars['Int']>;
  /** The copyright notice for the returned result. */
  copyright?: Maybe<Scalars['String']>;
  /** The results returned by the call. */
  data?: Maybe<CreatorDataWrapper_Data>;
  /** A digest value of the content returned by the call. */
  etag?: Maybe<Scalars['String']>;
  /** A string description of the call status. */
  status?: Maybe<Scalars['String']>;
};

/** The results returned by the call. */
export type CreatorDataWrapper_Data = {
  __typename?: 'CreatorDataWrapper_data';
  /** The total number of results returned by this call. */
  count?: Maybe<Scalars['Int']>;
  /** The requested result limit. */
  limit?: Maybe<Scalars['Int']>;
  /** The requested offset (number of skipped results) of the call. */
  offset?: Maybe<Scalars['Int']>;
  /** The list of creators returned by the call. */
  results?: Maybe<Array<Creator>>;
  /** The total number of resources available given the current filter set. */
  total?: Maybe<Scalars['Int']>;
};

export type Creator = {
  __typename?: 'Creator';
  /** A resource list containing the comics which feature work by this creator. */
  comics?: Maybe<Creator_Comics>;
  /** A resource list containing the events which feature work by this creator. */
  events?: Maybe<Creator_Events>;
  /** The first name of the creator. */
  firstName?: Maybe<Scalars['String']>;
  /** The full name of the creator (a space-separated concatenation of the above four fields). */
  fullName?: Maybe<Scalars['String']>;
  /** The unique ID of the creator resource. */
  id?: Maybe<Scalars['Int']>;
  /** The last name of the creator. */
  lastName?: Maybe<Scalars['String']>;
  /** The middle name of the creator. */
  middleName?: Maybe<Scalars['String']>;
  /** The date the resource was most recently modified. */
  modified?: Maybe<Scalars['String']>;
  /** The canonical URL identifier for this resource. */
  resourceURI?: Maybe<Scalars['String']>;
  /** A resource list containing the series which feature work by this creator. */
  series?: Maybe<Creator_Series>;
  /** A resource list containing the stories which feature work by this creator. */
  stories?: Maybe<Creator_Stories>;
  /** The suffix or honorific for the creator. */
  suffix?: Maybe<Scalars['String']>;
  /** The representative image for this creator. */
  thumbnail?: Maybe<Creator_Thumbnail>;
  /** A set of public web site URLs for the resource. */
  urls?: Maybe<Array<Url>>;
};

/** A resource list containing the comics which feature work by this creator. */
export type Creator_Comics = {
  __typename?: 'Creator_comics';
  /** The number of total available issues in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of issues in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned issues in this collection. */
  items?: Maybe<Array<ComicSummary>>;
  /** The number of issues returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing the events which feature work by this creator. */
export type Creator_Events = {
  __typename?: 'Creator_events';
  /** The number of total available events in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of events in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned events in this collection. */
  items?: Maybe<Array<EventSummary>>;
  /** The number of events returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing the series which feature work by this creator. */
export type Creator_Series = {
  __typename?: 'Creator_series';
  /** The number of total available series in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of series in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned series in this collection. */
  items?: Maybe<Array<SeriesSummary>>;
  /** The number of series returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** A resource list containing the stories which feature work by this creator. */
export type Creator_Stories = {
  __typename?: 'Creator_stories';
  /** The number of total available stories in this list. Will always be greater than or equal to the "returned" value. */
  available?: Maybe<Scalars['Int']>;
  /** The path to the full list of stories in this collection. */
  collectionURI?: Maybe<Scalars['String']>;
  /** The list of returned stories in this collection. */
  items?: Maybe<Array<StorySummary>>;
  /** The number of stories returned in this collection (up to 20). */
  returned?: Maybe<Scalars['Int']>;
};

/** The representative image for this creator. */
export type Creator_Thumbnail = {
  __typename?: 'Creator_thumbnail';
  /** The file extension for the image. */
  extension?: Maybe<Scalars['String']>;
  /** The directory path of to the image. */
  path?: Maybe<Scalars['String']>;
};

export enum MarvelEntity {
  Comic = 'comic',
  Character = 'character',
  Creator = 'creator',
  Event = 'event',
  Series = 'series',
  Story = 'story',
}

export type MarvelEntityResult =
  | Comic
  | Character
  | Creator
  | Event
  | Series
  | Story;

export type Pagination = {
  __typename?: 'Pagination';
  count?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type ListWrapper = {
  __typename?: 'listWrapper';
  entity?: Maybe<MarvelEntity>;
  pagination?: Maybe<Pagination>;
  results?: Maybe<Array<Maybe<MarvelEntityResult>>>;
};

export type GetCharactersQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;

export type GetCharactersQuery = { __typename?: 'Query' } & {
  characters: { __typename?: 'CharacterDataWrapper' } & {
    data?: Maybe<
      { __typename?: 'CharacterDataWrapper_data' } & CharacterFieldsFragment
    >;
  };
};

export type CharacterFieldsFragment = {
  __typename?: 'CharacterDataWrapper_data';
} & {
  results?: Maybe<
    Array<
      { __typename?: 'Character' } & Pick<
        Character,
        'id' | 'name' | 'description' | 'modified'
      > & {
          thumbnail?: Maybe<
            { __typename?: 'Character_thumbnail' } & Pick<
              Character_Thumbnail,
              'path' | 'extension'
            >
          >;
        }
    >
  >;
};

export type GetComicsQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;

export type GetComicsQuery = { __typename?: 'Query' } & {
  comics: { __typename?: 'ComicDataWrapper' } & {
    data?: Maybe<
      { __typename?: 'ComicDataWrapper_data' } & ComicsFieldsFragment
    >;
  };
};

export type ComicsFieldsFragment = { __typename?: 'ComicDataWrapper_data' } & {
  results?: Maybe<
    Array<{ __typename?: 'Comic' } & Pick<Comic, 'id' | 'title'>>
  >;
};

export type PaginationFragment = { __typename?: 'Pagination' } & Pick<
  Pagination,
  'count' | 'limit' | 'offset' | 'total'
>;

export type ListDynamicQueryVariables = Exact<{
  entity: MarvelEntity;
  filters: Scalars['JSONObject'];
}>;

export type ListDynamicQuery = { __typename?: 'Query' } & {
  list?: Maybe<
    { __typename?: 'listWrapper' } & {
      pagination?: Maybe<{ __typename?: 'Pagination' } & PaginationFragment>;
      results?: Maybe<
        Array<
          Maybe<
            | ({ __typename: 'Comic' } & Pick<Comic, 'id' | 'title'>)
            | { __typename: 'Character' }
            | { __typename: 'Creator' }
            | { __typename: 'Event' }
            | { __typename: 'Series' }
            | { __typename: 'Story' }
          >
        >
      >;
    }
  >;
};

export const CharacterFieldsFragmentDoc = gql`
  fragment characterFields on CharacterDataWrapper_data {
    results {
      id
      name
      description
      thumbnail {
        path
        extension
      }
      modified
    }
  }
`;
export const ComicsFieldsFragmentDoc = gql`
  fragment comicsFields on ComicDataWrapper_data {
    results {
      id
      title
    }
  }
`;
export const PaginationFragmentDoc = gql`
  fragment Pagination on Pagination {
    count
    limit
    offset
    total
  }
`;
export const GetCharactersDocument = gql`
  query getCharacters($name: String) {
    characters(name: $name) {
      data {
        ...characterFields
      }
    }
  }
  ${CharacterFieldsFragmentDoc}
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    baseOptions
  );
}
export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    baseOptions
  );
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>;
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>;
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>;
export function refetchGetCharactersQuery(
  variables?: GetCharactersQueryVariables
) {
  return { query: GetCharactersDocument, variables: variables };
}
export const GetComicsDocument = gql`
  query getComics($name: String) {
    comics(title: $name) {
      data {
        ...comicsFields
      }
    }
  }
  ${ComicsFieldsFragmentDoc}
`;

/**
 * __useGetComicsQuery__
 *
 * To run a query within a React component, call `useGetComicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComicsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetComicsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetComicsQuery, GetComicsQueryVariables>
) {
  return Apollo.useQuery<GetComicsQuery, GetComicsQueryVariables>(
    GetComicsDocument,
    baseOptions
  );
}
export function useGetComicsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComicsQuery,
    GetComicsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetComicsQuery, GetComicsQueryVariables>(
    GetComicsDocument,
    baseOptions
  );
}
export type GetComicsQueryHookResult = ReturnType<typeof useGetComicsQuery>;
export type GetComicsLazyQueryHookResult = ReturnType<
  typeof useGetComicsLazyQuery
>;
export type GetComicsQueryResult = Apollo.QueryResult<
  GetComicsQuery,
  GetComicsQueryVariables
>;
export function refetchGetComicsQuery(variables?: GetComicsQueryVariables) {
  return { query: GetComicsDocument, variables: variables };
}
export const ListDynamicDocument = gql`
  query listDynamic($entity: marvelEntity!, $filters: JSONObject!) {
    list(marvelEntity: $entity, filters: $filters) {
      pagination {
        ...Pagination
      }
      results {
        __typename
        ... on Comic {
          id
          title
        }
      }
    }
  }
  ${PaginationFragmentDoc}
`;

/**
 * __useListDynamicQuery__
 *
 * To run a query within a React component, call `useListDynamicQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDynamicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDynamicQuery({
 *   variables: {
 *      entity: // value for 'entity'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListDynamicQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListDynamicQuery,
    ListDynamicQueryVariables
  >
) {
  return Apollo.useQuery<ListDynamicQuery, ListDynamicQueryVariables>(
    ListDynamicDocument,
    baseOptions
  );
}
export function useListDynamicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListDynamicQuery,
    ListDynamicQueryVariables
  >
) {
  return Apollo.useLazyQuery<ListDynamicQuery, ListDynamicQueryVariables>(
    ListDynamicDocument,
    baseOptions
  );
}
export type ListDynamicQueryHookResult = ReturnType<typeof useListDynamicQuery>;
export type ListDynamicLazyQueryHookResult = ReturnType<
  typeof useListDynamicLazyQuery
>;
export type ListDynamicQueryResult = Apollo.QueryResult<
  ListDynamicQuery,
  ListDynamicQueryVariables
>;
export function refetchListDynamicQuery(variables?: ListDynamicQueryVariables) {
  return { query: ListDynamicDocument, variables: variables };
}
