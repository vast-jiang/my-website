<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body { font-family: 'Courier New', monospace; background: #050505; color: #33ff00; max-width: 800px; margin: 0 auto; padding: 20px; }
          a { color: #33ff00; text-decoration: none; border-bottom: 1px dashed #33ff00; }
          .header { border-bottom: 2px solid #33ff00; padding-bottom: 20px; margin-bottom: 40px; }
          .item { margin-bottom: 40px; border: 1px solid #005f00; padding: 20px; background: rgba(0,20,0,0.5); }
          .date { color: #005f00; font-size: 0.8em; margin-bottom: 10px; display: block; }
          h1, h2 { text-transform: uppercase; }
          .desc { margin-top: 10px; color: #ccffcc; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>RSS FEED: <xsl:value-of select="/rss/channel/title"/></h1>
          <p>> <xsl:value-of select="/rss/channel/description"/></p>
          <p>> <a href="{/rss/channel/link}">RETURN_TO_WEBSITE</a></p>
        </div>
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <span class="date">[<xsl:value-of select="pubDate"/>]</span>
            <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
            <div class="desc"><xsl:value-of select="description"/></div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>