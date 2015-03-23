
define([ "jquery" ], function( $ ) {
    /*
    * when version = undefined ( 1 )
    * property `url` `date` `name` `info`
    * url != hdurl when bing.com
    * `date` is `enddate`
    *
    * when version = 2
    * add new property `hdurl` `enddate` `shortname` `version` `type`
    * change `data` to `endate`
    *
    * type include: `bing.com` `wallhaven.cc` `unsplash.it` `unsplash.com` `flickr.com` `googleartproject.com`
    *
    * when version = 2.1
    * add new property `favorite`
    */
    const VERSION = "2.1";

    function VO() {
        this.val = {};
    }

    VO.prototype.Create = function( url, hdurl, name, info, enddate, shortname, type, favorite ) {

            this.val.url       = url;
            this.val.hdurl     = hdurl;
            this.val.name      = name;
            this.val.info      = info;
            this.val.enddate   = enddate;
            this.val.shortname = shortname;
            this.val.type      = type;
            this.val.version   = VERSION;
            this.val.favorite  = favorite == undefined ? -1 : favorite;

            return this.val;
    }

    VO.prototype.Set = function() {
            chrome.storage.local.set( { "simptab-background" : this.val });
    }

    VO.prototype.Get = function ( callBack ) {
            return chrome.storage.local.get( "simptab-background", callBack );
    }

    VO.prototype.Verify = function( version ) {
        if ( version == undefined || version != VERSION ) {
            return false;
        }
        else {
            return true;
        }
    }

    return new VO();

    /*
    var result = {};
    const VERSION = "2.1";

    return {
        Create: function( url, hdurl, name, info, enddate, shortname, type, favorite ) {

            result.url       = url;
            result.hdurl     = hdurl;
            result.name      = name;
            result.info      = info;
            result.enddate   = enddate;
            result.shortname = shortname;
            result.type      = type;
            result.version   = VERSION;
            result.favorite  = favorite == undefined ? -1 : favorite;

            return result;
        },

        Value: function() {
            return result;
        },

        Set: function( result ) {
            chrome.storage.local.set( { "simptab-background" : result });
        },

        Get: function ( callBack ) {
            return chrome.storage.local.get( "simptab-background", callBack );
        },

        Verify: function( version ) {
            if ( version == undefined || version != VERSION ) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    */
});
