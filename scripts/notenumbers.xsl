<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    version="3.0">
    
    <xsl:output method="xml" indent="yes"/>

    <xsl:mode on-no-match="shallow-copy"/>

    <xsl:strip-space elements="*:choice *:subst *:text *:body *:div *:seg"/>
    
    <xsl:template match="note[parent::seg]">
        <note xmlns="http://www.tei-c.org/ns/1.0" n="{count(preceding::note[parent::seg]) + 1}">
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates select="node()"/>
        </note>
    </xsl:template>

    <!-- <xsl:template match="p">
        <ab xmlns="http://www.tei-c.org/ns/1.0" rendition="inline">
            <xsl:apply-templates/>
        </ab>
    </xsl:template>

    <xsl:template match="p[following-sibling::*[1][self::closer[@rendition eq '#inline']]]">
        <p xmlns="http://www.tei-c.org/ns/1.0" rendition="inline">
            <xsl:apply-templates/>
        </p>
    </xsl:template> -->
    
</xsl:stylesheet>