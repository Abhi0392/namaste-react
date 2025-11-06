import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1314480-1082.jpg?w=2000"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "705624",
          name: "Aromas of Biryani",
          cloudinaryImageId: "7d83016d319aebcb90ac3c9c106987a3",
          locality: "S T Bed Extension",
          areaName: "Koramangala",
          costForTwo: "₹600 for two",
          cuisines: ["Biryani", "North Indian", "Tandoor", "Beverages"],
          avgRating: 4.3,
          parentId: "36155",
          avgRatingString: "4.3",
          totalRatingsString: "1.9K+",
          promoted: true,
          adTrackingId:
            "cid=2cab63cb-4d84-47fc-ae12-1db76f8147be~p=1~adgrpid=2cab63cb-4d84-47fc-ae12-1db76f8147be#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=705624~plpr=COLLECTION~eid=7bf8fa45-44da-4326-9336-1b49762aae79~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 11:15:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "503",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "2cab63cb-4d84-47fc-ae12-1db76f8147be",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=705624&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1087169",
          name: "Mealy - Your Everyday Meal",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/29/c3f3ea1a-ce72-4671-8ebb-4012734c1faa_1087169.jpg",
          locality: "KHB Colony",
          areaName: "Koramangala",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Street Food", "Beverages"],
          avgRating: 4.2,
          parentId: "11705",
          avgRatingString: "4.2",
          totalRatingsString: "12",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.2,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 03:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1087169&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "689404",
          name: "Haldiram's Restaurant",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/d20a6bec-f0e0-48aa-8deb-ebfff035b1f6_689404.JPG",
          locality: "HSR Layout",
          areaName: "HSR Layout",
          costForTwo: "₹400 for two",
          cuisines: [
            "North Indian",
            "Chaat",
            "Chinese",
            "South Indian",
            "Fast Food",
            "Snacks",
            "sandwich",
            "Burger",
            "pizza",
            "Pasta",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "351771",
          avgRatingString: "4.1",
          totalRatingsString: "5.1K+",
          promoted: true,
          adTrackingId:
            "cid=1784efa3-820f-4bfb-b8e1-d423e89d928d~p=2~adgrpid=1784efa3-820f-4bfb-b8e1-d423e89d928d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=689404~plpr=COLLECTION~eid=cd0f81fa-f285-4e5d-aaf5-782394a92ddb~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "1784efa3-820f-4bfb-b8e1-d423e89d928d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=689404&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "588791",
          name: "Goila Butter Chicken",
          cloudinaryImageId: "5e19832da032dd69547565e27104706f",
          locality: "CLUB ROAD",
          areaName: "Koramangala",
          costForTwo: "₹600 for two",
          cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
          avgRating: 4.1,
          parentId: "322587",
          avgRatingString: "4.1",
          totalRatingsString: "2.2K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "2.9",
              ratingCount: "124",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=588791&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "902452",
          name: "Moms Dabba",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/d448dfff-abb1-42ef-ac6e-5906c0e4fed0_902452.jpg",
          locality: "Korambangala",
          areaName: "Koramangala",
          costForTwo: "₹400 for two",
          cuisines: ["North Indian"],
          avgRating: 4.4,
          veg: true,
          parentId: "472526",
          avgRatingString: "4.4",
          totalRatingsString: "1.3K+",
          promoted: true,
          adTrackingId:
            "cid=3352ee14-0680-4e6f-952a-4d07397c03eb~p=5~adgrpid=3352ee14-0680-4e6f-952a-4d07397c03eb#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=902452~plpr=COLLECTION~eid=52282d3c-c369-4370-aa2b-089ac36d0605~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 15:20:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹15",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3352ee14-0680-4e6f-952a-4d07397c03eb",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=902452&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "288678",
          name: "Home Plate by EatFit",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/7/a50c5918-66dd-495c-bf21-86df3fe6925f_288678.jpg",
          locality: "6th Block",
          areaName: "Koramangala",
          costForTwo: "₹250 for two",
          cuisines: [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts",
          ],
          avgRating: 4.5,
          parentId: "301197",
          avgRatingString: "4.5",
          totalRatingsString: "2.0K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=288678&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "412283",
          name: "Kota Kachori And Falahaar",
          cloudinaryImageId: "56611293dd1149ed113958cd2e2fbc2b",
          locality: "HSR Layout",
          areaName: "HSR Layout",
          costForTwo: "₹150 for two",
          cuisines: [
            "Snacks",
            "Desserts",
            "Rajasthani",
            "Chaat",
            "Beverages",
            "Sweets",
          ],
          avgRating: 4.1,
          veg: true,
          parentId: "373582",
          avgRatingString: "4.1",
          totalRatingsString: "11K+",
          promoted: true,
          adTrackingId:
            "cid=885331f4-886c-4240-ba40-c3eb11e58c17~p=6~adgrpid=885331f4-886c-4240-ba40-c3eb11e58c17#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=412283~plpr=COLLECTION~eid=68504da9-b4fb-4f60-99ee-58362f8aae27~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 21:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹29",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "3.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "885331f4-886c-4240-ba40-c3eb11e58c17",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=412283&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "394978",
          name: "Lucknowee - Nawabi Rolls And Kebabs",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/22/d0ccfafe-ef75-4bc8-b314-12eddc5d1ec7_394978.jpg",
          locality: "Koramangala",
          areaName: "Koramangala",
          costForTwo: "₹600 for two",
          cuisines: [
            "rolls",
            "shawarma",
            "Kebabs",
            "Biryani",
            "North Indian",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4.2,
          parentId: "513255",
          avgRatingString: "4.2",
          totalRatingsString: "503",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹299",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "10K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=394978&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "577800",
          name: "ITC Aashirvaad Soul Creations",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/11/90574d79-a02d-4f3d-b90a-4c7c33af34fd_af328daf-ef58-40eb-a590-364df97874e7.png_compressed",
          locality: "7th Block",
          areaName: "Koramangala",
          costForTwo: "₹500 for two",
          cuisines: [
            "North Indian",
            "pure veg",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "Sweets",
          ],
          avgRating: 4.4,
          veg: true,
          parentId: "346141",
          avgRatingString: "4.4",
          totalRatingsString: "3.0K+",
          promoted: true,
          adTrackingId:
            "cid=34468080~p=7~adgrpid=34468080#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=577800~plpr=COLLECTION~eid=416f4513-f517-4d5c-a5c0-1e2fb202f7bb~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "34468080",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=577800&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "619503",
          name: "Litti Heist",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/29/4efe4fdb-fe78-4cb7-93db-57a169a80c81_619503 (1).jpg",
          locality: "1st Block",
          areaName: "Koramangala",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Bihari"],
          avgRating: 4.3,
          parentId: "369080",
          avgRatingString: "4.3",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=619503&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "342032",
          name: "Bhartiya Jalpan",
          cloudinaryImageId: "ybfyjdu8fhlgqj6i9dlh",
          locality: "HSR Layout",
          areaName: "HSR Layout",
          costForTwo: "₹450 for two",
          cuisines: ["North Indian", "Beverages", "Chaat"],
          avgRating: 4.3,
          parentId: "7518",
          avgRatingString: "4.3",
          totalRatingsString: "23K+",
          promoted: true,
          adTrackingId:
            "cid=a91610dc-aaa7-4117-a41a-4ef6c108cc98~p=9~adgrpid=a91610dc-aaa7-4117-a41a-4ef6c108cc98#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=342032~plpr=COLLECTION~eid=c953fdac-4b89-43be-b7bb-69b325c046d8~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 50,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "5.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a91610dc-aaa7-4117-a41a-4ef6c108cc98",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=342032&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "750225",
          name: "Daily Kitchen - Everyday Homely Meals",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/8f5cea18-dacd-4392-a877-8444e6a0e8aa_750225.jpg",
          locality: "6TH BLOCK",
          areaName: "Koramangala",
          costForTwo: "₹250 for two",
          cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
          avgRating: 4.4,
          parentId: "444382",
          avgRatingString: "4.4",
          totalRatingsString: "854",
          sla: {
            deliveryTime: 15,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "10-20 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-05 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=750225&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "16197",
          name: "Kullad Cafe",
          cloudinaryImageId: "6ba232b342c03ae95a41965735d8e517",
          locality: "BTM Layout",
          areaName: "BTM Layout",
          costForTwo: "₹150 for two",
          cuisines: [
            "North Indian",
            "Snacks",
            "Breakfast",
            "Street Food",
            "Beverages",
          ],
          avgRating: 4.3,
          veg: true,
          parentId: "21550",
          avgRatingString: "4.3",
          totalRatingsString: "38K+",
          promoted: true,
          adTrackingId:
            "cid=975f8aec-aaf7-49af-9abb-4a481b9273eb~p=10~adgrpid=975f8aec-aaf7-49af-9abb-4a481b9273eb#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=16197~plpr=COLLECTION~eid=78c2243e-fc04-4d2d-95c3-c242d5761f26~srvts=1762235119455~collid=80475",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-04 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "3.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "975f8aec-aaf7-49af-9abb-4a481b9273eb",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=16197&source=collection&query=Paratha",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];

const RestaruntCard = (props) => {
  const { resData } = props;
  console.log("resData", resData);
  const { name, avgRating, cuisines, sla } = resData?.card?.card?.info;
  console.log("obj", resData);
  return (
    <div className="res-card">
      <img
        className="food1"
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData?.card?.card?.info?.cloudinaryImageId
        }
      ></img>
      {/* <h3>Karavali Tindi</h3>
      <h4>South Inidan, North Indian, Chinese</h4>
      <h4>5 stars</h4>
      <h4>30 min</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating.String}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((restraunt) => (
          <RestaruntCard
            key={restraunt?.card?.card?.info?.id}
            resData={restraunt}
          />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
