---
keywords: ["SIMH", "Eclipse", "DG Eclipse", "Nova RDOS", "Data General", 1970s, 1972]
image: ./nova-rdos-simh-eclipse-3.webp
description: 'We can run ! Nova RDOS on the SIMH Eclipse emulator. First, we need to download the ! Nova RDOS kit for SIMH Eclipse emulator. You can download the needed kit from the "SIMH Legacy" website:'
sidebar_position: 3
sidebar_label: "! Nova RDOS on SIMH Eclipse Emulator"
---

# How to install ! Nova RDOS on SIMH Eclipse Emulator?

![SIMH Eclipse emulator with ! Nova RDOS](./nova-rdos-simh-eclipse-3.webp)

We can run [! Nova RDOS](/1970s/1972/nova-rdos) on the SIMH Eclipse emulator. First, we need to download the ! Nova RDOS kit for SIMH Eclipse emulator.

## Downloads

You can download the needed kit from the ["SIMH Legacy" website](http://simh.trailing-edge.com/):

- [! Nova RDOS kit for SIMH Eclipse emulator](http://simh.trailing-edge.com/kits/zrdos75.zip)

## Using ! Nova RDOS

:::tip

If you have not already installed SIMH Eclipse emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-eclipse/) on Linux and Windows.

:::

Extract the kit you downloaded. Inside you will find a file called `zrdos75.dsk`. Create a folder somewhere to store the files for this VM, and move the file named `zrdos75.dsk` into it.

Now we will create a config file for our VM. Create a text file called `eclipse.ini` with the following content in the VM folder:

```ini
att dkp0 zrdos75.dsk
set tti dasher
boot dkp0
```

![eclipse.ini](./nova-rdos-simh-eclipse-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
eclipse
```

![eclipse](./nova-rdos-simh-eclipse-2.webp)

After the emulator starts, press enter when asked for filename. When asked for date, enter it in `MM/DD/YY` format. For example, enter `04/13/74`. Keep the year in 1970s or 80s, to avoid any issues. Similarly, when asked for time, enter it in `HH:MM:SS` format. For example, enter `12:55:31`.

Now you can enter `LIST` to see a list of files available:

![List of files in ! Nova RDOS](./nova-rdos-simh-eclipse-3.webp)

That's it! We used ! Nova RDOS on SIMH Eclipse emulator. We can create a shell script to make it easy to launch the VM.

### Linux

Create a file called `Eclipse-RDOS.sh` with the following content:

```bash
#!/bin/bash
eclipse
```

Now make the file executable:

```bash
chmod +x Eclipse-RDOS.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1970s/1972/nova-rdos/#manuals) on the [main ! Nova RDOS page](/1970s/1972/nova-rdos/) to learn how to use it.

### Windows

Create a file called `Eclipse-RDOS.bat` with the following content:

```bash
eclipse
```

Now you can start the VM by double-clicking the shell script. See the [manuals section](/1970s/1972/nova-rdos/#manuals) on the [main ! Nova RDOS page](/1970s/1972/nova-rdos/) to learn how to use it.

## Credits

- The disk image and other files used above are from a kit available on [SimH "Classic" website](http://simh.trailing-edge.com/).

## Video tutorial

Do you want to follow the tutorial by watching a video? We will post a video on our [YouTube channel](https://www.youtube.com/@virtua1hub) soon.

Archives of this tutorial may be available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1970s/1972/nova-rdos/simh-eclipse/).
