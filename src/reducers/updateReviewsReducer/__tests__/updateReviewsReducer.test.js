import { updateReviewsReducer } from '../updateReviewsReducer';
import * as types from '../../../constants/constants';
import { INITIAL_STATE } from '../../../constants/INITIAL_STATE';
import { GROUP_TYPES } from '../../../constants/GROUP_TYPES';

describe('updateReviews reducer', () => {
  it('should handle initial state', () => {
    expect(updateReviewsReducer(undefined, {})).toEqual(INITIAL_STATE)
  });

  it('should handle API_START', () => {
    const action = { type: types.API_START, payload: 'GET_REVIEWS' };
    expect(updateReviewsReducer([], action)).toEqual(
      { isFetchingData: true }
    )
  });

  it('should handle API_END', () => {
    const action = { type: types.API_END, payload: 'GET_REVIEWS' };
    expect(updateReviewsReducer([], action)).toEqual(
      { isFetchingData: false }
    )
  });

  it('should handle UPDATE_REVIEWS', () => {
    expect(
      updateReviewsReducer({reviews: []}, {
        type: types.UPDATE_REVIEWS,
        reviews: {
          reviews: [
            {
              reviewId: 'R1SQ32067PGIK5',
              stars: 5,
              reviewCreated: 1517961600000,
              productImg: '61YqZpvCyaL',
            },
          ],
          hasMore: true,
        }
      })
    ).toEqual(
      {
        hasMore: true,
        reviews: [
          {
            productImg: '61YqZpvCyaL',
            reviewCreated: 1517961600000,
            reviewId: 'R1SQ32067PGIK5',
            stars: 5
          }
        ]
      }
    );

    expect(
      updateReviewsReducer(
        {
          hasMore: true,
          reviews: [
            {
              productImg: '61YqZpvCyaL',
              reviewCreated: 1517961600000,
              reviewId: 'R1SQ32067PGIK5',
              stars: 5
            }
          ]
        },
        {
          type: types.UPDATE_REVIEWS,
          reviews: {
            hasMore: true,
            reviews: [
              {
                productImg: '61YqZpvCyaL',
                reviewCreated: 1517961600000,
                reviewId: 'R1SQ32067PGIK5',
                stars: 5
              }
            ]
          }
        }
      )
    ).toEqual(
      {
        hasMore: true,
        reviews: [
          {
            productImg: '61YqZpvCyaL',
            reviewCreated: 1517961600000,
            reviewId: 'R1SQ32067PGIK5',
            stars: 5
          },
          {
            productImg: '61YqZpvCyaL',
            reviewCreated: 1517961600000,
            reviewId: 'R1SQ32067PGIK5',
            stars: 5
          }
        ]
      }
    )
  });

  it('should handle ORDER_REVIEWS', () => {
    expect(
      updateReviewsReducer({order: ''}, {
        type: types.ORDER_REVIEWS,
        order: '1'
      })
    ).toEqual(
      {
        order: "1"
      }
    )
  });

  it('should handle GROUP_REVIEWS', () => {
    expect(
      updateReviewsReducer([], {
        type: types.GROUP_REVIEWS,
        group: GROUP_TYPES.DAY,
      })
    ).toEqual(
      {
        group: GROUP_TYPES.DAY,
      }
    )
  });

  it('should handle FILTER_REVIEWS', () => {
    expect(
      updateReviewsReducer([], {
        type: types.FILTER_REVIEWS,
        filter: {
          1: true,
        },
      })
    ).toEqual(
      {
        filter:
          {
            "1": true
          }
      }
    )
  });
});